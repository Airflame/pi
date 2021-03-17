import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Student } from 'src/app/data.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {
  public disciplines: String[];
  public classYears: String[];
  public student: Student;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.disciplines = this.dataService.getDisciplines();
    this.classYears = this.dataService.getClassYears();
    let students = this.dataService.getStudents();
    this.student = {} as Student;
    this.student.id = students[students.length - 1].id + 1;
  }

  save(): void {
    this.dataService.addStudent(this.student);
  }

}
