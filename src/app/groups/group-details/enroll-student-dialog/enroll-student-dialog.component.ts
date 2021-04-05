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
  total$: Observable<number>;

  constructor(
    public modal: NgbActiveModal,
    public studentsService: AvailableStudentsService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.studentsService.refresh(this.group);
    this.students$ = this.studentsService.students$;
    this.total$ = this.studentsService.total$;
  }
}
