import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ɵɵqueryRefresh } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Teacher } from '../data.service';
import { AddTeacherDialogComponent } from './add-teacher-dialog/add-teacher-dialog.component';
import { EditTeacherDialogComponent } from './edit-teacher-dialog/edit-teacher-dialog.component';
import { NgbdSortableHeader, SortColumn, SortDirection, SortEvent } from './sortable.directive';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersService, DecimalPipe],
})
export class TeachersComponent implements OnInit {
  teachers$: Observable<Teacher[]>;
  total$: Observable<number>;
  selectedFaculty: string;
  column: SortColumn;
  direction: SortDirection;

  constructor(
    public teachersService: TeachersService,
    public dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.teachers$ = this.teachersService.teachers$;
    this.total$ = this.teachersService.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.column = column;
    this.direction = direction;
    this.teachersService.sortColumn = column;
    this.teachersService.sortDirection = direction;
  }

  addTeacher(): void {
    const modalRef = this.modalService.open(AddTeacherDialogComponent);
    modalRef.result.then(val => {
      this.teachersService.refresh();
    });
  }

  editTeacher(teacher: Teacher): void {
    const modalRef = this.modalService.open(EditTeacherDialogComponent);
    modalRef.componentInstance.initialTeacher = teacher;
    modalRef.result.then(val => {
      this.teachersService.refresh();
    });
  }

  deleteTeacher(teacher: Teacher): void {
    this.teachersService.deleteTeacher(teacher);
  }
}
