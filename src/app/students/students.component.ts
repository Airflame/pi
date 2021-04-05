import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ɵɵqueryRefresh } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Student } from '../data.service';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [StudentsService, DecimalPipe],
})
export class StudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  total$: Observable<number>;
  selectedDiscipline: string;
  selectedClassYear: string;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public studentsService: StudentsService,
    public dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.students$ = this.studentsService.students$;
    this.total$ = this.studentsService.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.studentsService.sortColumn = column;
    this.studentsService.sortDirection = direction;
  }

  addStudent(): void {
    const modalRef = this.modalService.open(AddStudentDialogComponent);
    modalRef.result.then(val => {
      this.studentsService.refresh();
    });
  }

  editStudent(student: Student): void {
    const modalRef = this.modalService.open(EditStudentDialogComponent);
    modalRef.componentInstance.initialStudent = student;
    modalRef.result.then(val => {
      this.studentsService.refresh();
    });
  }

  deleteStudent(student: Student): void {
    this.studentsService.deleteStudent(student);
  }
}
