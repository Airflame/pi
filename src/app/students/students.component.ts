import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ɵɵqueryRefresh } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Student } from '../data.service';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';
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

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public studentsService: StudentsService,
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.students$ = this.studentsService.students$;
    this.total$ = this.studentsService.total$;
    console.log(this.dataService.getStudents());
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.studentsService.sortColumn = column;
    this.studentsService.sortDirection = direction;
  }

  open() {
    const modalRef = this.modalService.open(AddStudentDialogComponent);
    modalRef.componentInstance.name = 'World';
    modalRef.result.then(val => {
      this.studentsService.refresh();
    });
  }
}
