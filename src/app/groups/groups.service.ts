import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DataService, Group, Teacher } from '../data.service';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
  groups: Group[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

function matches(group: Group, term: string) {
  return (
    group.subject.discipline.toLowerCase().includes(term.toLowerCase()) ||
    group.subject.name.toLowerCase().includes(term.toLowerCase()) ||
    group.teacher.lastName.toLowerCase().includes(term.toLowerCase()) ||
    group.teacher.firstName.toLowerCase().includes(term.toLowerCase()) ||
    group.room.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private groups: Group[];
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _groups$ = new BehaviorSubject<Group[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private selectedDiscipline: string;
  private selectedSemester: number;
  public disciplines: string[];
  public semesters: number[];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
  };

  constructor(private dataService: DataService) {
    this.refresh();
  }

  public refresh(): void {
    this.groups = this.dataService.getGroups();
    this.disciplines = this.dataService.getDisciplines();
    this.semesters = [...new Set(this.groups.map(g => g.subject.semester))]
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
        this._groups$.next(result.groups);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  public setSelectedDiscipline(selectedDiscipline: string) {
    this.selectedDiscipline = selectedDiscipline;
    this.apply();
  }

  public setSelectedSemester(selectedSemester: number) {
    this.selectedSemester = selectedSemester;
    this.apply();
  }

  // public deleteGroup(group: Group): void {
  //   this.dataService.deleteGroup(group);
  //   this.refresh();
  // }

  get groups$() {
    return this._groups$.asObservable();
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
    const {
      pageSize,
      page,
      searchTerm,
    } = this._state;

    // 1. sort
    let groups = this.groups;

    // 2. filter
    if (this.selectedDiscipline != null)
      groups = groups.filter(
        (group) => group.subject.discipline == this.selectedDiscipline
      );
    if (this.selectedSemester != null)
      groups = groups.filter(
        (group) => group.subject.semester == this.selectedSemester
      );
    groups = groups.filter((group) => matches(group, searchTerm));
    const total = groups.length;

    // 3. paginate
    groups = groups.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ groups, total });
  }
}
