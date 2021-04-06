import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {
  DataService,
  Group,
  Student,
  Teacher,
  Week,
} from 'src/app/data.service';
import { EnrollStudentDialogComponent } from './enroll-student-dialog/enroll-student-dialog.component';
import { EnrolledStudentsService } from './enrolled-students.service';
import { TimeDialogComponent } from './time-dialog/time-dialog.component';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  id: number;
  group: Group;
  students$: Observable<Student[]>;
  total$: Observable<number>;
  weekP: Week = Week.P;
  weekN: Week = Week.N;
  weekAll: Week = Week.ALL;
  teachers: Teacher[];

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public dataService: DataService,
    public studentsService: EnrolledStudentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.group = this.dataService.getGroup(this.id);
      this.studentsService.refresh(this.group);
      this.students$ = this.studentsService.students$;
      this.total$ = this.studentsService.total$;
    });
    this.teachers = this.dataService.getTeachers();
  }

  addStudent(): void {
    const modalRef = this.modalService.open(EnrollStudentDialogComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.group = this.group;
    modalRef.result.then((val) => {
      this.studentsService.refresh(this.group);
    });
  }

  deleteStudent(student: Student): void {
    if (!this.group.closed) {
      this.dataService.deleteEnrolledStudent(this.group, student);
      this.studentsService.refresh(this.group);
    }
  }

  editTime(): void {
    const modalRef = this.modalService.open(TimeDialogComponent);
    modalRef.componentInstance.group = this.group;
    modalRef.result.then((val) => {
      this.studentsService.refresh(this.group);
    });
  }
}
