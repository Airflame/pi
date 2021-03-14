import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Student } from '../data.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [StudentsService, DecimalPipe]
})
export class StudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students$ = this.studentsService.students$;
    this.total$ = this.studentsService.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.studentsService.sortColumn = column;
    this.studentsService.sortDirection = direction;
  }

}
