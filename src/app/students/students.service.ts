import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DataService, Student} from '../data.service';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  students: Student[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(students: Student[], column: SortColumn, direction: string): Student[] {
  if (direction === '' || column === '') {
    return students;
  } else {
    return [...students].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(student: Student, term: string, pipe: PipeTransform) {
  return student.firstName.toLowerCase().includes(term.toLowerCase())
    || student.lastName.toLowerCase().includes(term.toLowerCase())
    || student.id.toString().includes(term)
    || student.discipline.toLowerCase().includes(term.toLowerCase())
    || student.classYear.toLowerCase().includes(term.toLowerCase());
}

@Injectable({providedIn: 'root'})
export class StudentsService {
  private students: Student[];
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _students$ = new BehaviorSubject<Student[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private dataService: DataService, private pipe: DecimalPipe) {
    this.refresh();
  }

  public refresh(): void {
    this.students = this.dataService.getStudents();
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._students$.next(result.students);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  public deleteStudent(student: Student): void {
    this.dataService.deleteStudent(student);
    this.refresh();
  }

  get students$() { return this._students$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let students = sort(this.students, sortColumn, sortDirection);

    // 2. filter
    students = students.filter(student => matches(student, searchTerm, this.pipe));
    const total = students.length;

    // 3. paginate
    students = students.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({students, total});
  }
}
