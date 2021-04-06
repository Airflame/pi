import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { DataService, Group, Student } from 'src/app/data.service';

interface SearchResult {
  students: Student[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

function matches(student: Student, term: string) {
  return (
    student.firstName.toLowerCase().includes(term.toLowerCase()) ||
    student.lastName.toLowerCase().includes(term.toLowerCase()) ||
    student.id.toString().includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class EnrolledStudentsService {
  private students: Student[];
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _students$ = new BehaviorSubject<Student[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private group: Group;

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
  };

  constructor(private dataService: DataService) {}

  public refresh(group: Group): void {
    this.group = group;
    this.students = this.dataService.getEnrolledStudents(group);
    this.apply();
  }

  private apply(): void {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        switchMap(() => this._search()),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._students$.next(result.students);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  public deleteStudent(student: Student): void {
    this.dataService.deleteEnrolledStudent(this.group, student);
    this.refresh(this.group);
  }

  get students$() {
    return this._students$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm } = this._state;

    let students = this.students.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

    // 2. filter
    students = students.filter((student) => matches(student, searchTerm));
    const total = students.length;

    // 3. paginate
    students = students.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ students, total });
  }
}
