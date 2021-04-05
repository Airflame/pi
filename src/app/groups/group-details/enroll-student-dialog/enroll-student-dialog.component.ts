import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService, Group, Student } from 'src/app/data.service';
import { AvailableStudentsService } from './available-students.service';

@Component({
  selector: 'app-enroll-student-dialog',
  templateUrl: './enroll-student-dialog.component.html',
  styleUrls: ['./enroll-student-dialog.component.scss'],
})
export class EnrollStudentDialogComponent implements OnInit {
  group: Group;
  students$: Observable<Student[]>;
  selected: boolean[];
  selectedAll: boolean;
  total$: Observable<number>;

  constructor(
    public modal: NgbActiveModal,
    public studentsService: AvailableStudentsService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.studentsService.refresh(this.group);
    this.students$ = this.studentsService.students$;
    this.selected = this.dataService
      .getAvailableStudents(this.group)
      .map((s) => false);
    this.total$ = this.studentsService.total$;
  }

  select(student: Student, value: boolean) {
    this.studentsService.select(student, value);
    if (value == false)
      this.selectedAll = false;
  }

  selectAll(value: boolean) {
    this.studentsService.select(null, value);
    this.selected = this.selected.map(s => value);
  }
}
