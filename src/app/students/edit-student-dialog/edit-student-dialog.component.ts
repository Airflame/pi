import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student, DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {
  public disciplines: string[];
  public classYears: string[];
  public initialStudent: Student;
  public student: Student = {} as Student;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.disciplines = this.dataService.getDisciplines();
    this.classYears = this.dataService.getClassYears();
    this.student.id = this.initialStudent.id;
    this.student.firstName = this.initialStudent.firstName;
    this.student.lastName = this.initialStudent.lastName;
    this.student.discipline = this.initialStudent.discipline;
    this.student.classYear = this.initialStudent.classYear;
  }

  save(): void {
    this.dataService.editStudent(this.student);
  }

}
