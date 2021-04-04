import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DataService, Teacher} from '../data.service';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  teachers: Teacher[];
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

function sort(teachers: Teacher[], column: SortColumn, direction: string): Teacher[] {
  if (direction === '' || column === '') {
    return teachers;
  } else {
    return [...teachers].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(teacher: Teacher, term: string, pipe: PipeTransform) {
  return teacher.firstName.toLowerCase().includes(term.toLowerCase())
    || teacher.lastName.toLowerCase().includes(term.toLowerCase())
    || teacher.title.toLowerCase().includes(term.toLowerCase())
    || teacher.faculty.toLowerCase().includes(term.toLowerCase());
}

@Injectable({providedIn: 'root'})
export class TeachersService {
  private teachers: Teacher[];
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _teachers$ = new BehaviorSubject<Teacher[]>([]);
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
    this.teachers = this.dataService.getTeachers();
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._teachers$.next(result.teachers);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  public deleteTeacher(teacher: Teacher): void {
    this.dataService.deleteTeacher(teacher);
    this.refresh();
  }

  get teachers$() { return this._teachers$.asObservable(); }
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
    let teachers = sort(this.teachers, sortColumn, sortDirection);

    // 2. filter
    teachers = teachers.filter(teacher => matches(teacher, searchTerm, this.pipe));
    const total = teachers.length;

    // 3. paginate
    teachers = teachers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({teachers, total});
  }
}
