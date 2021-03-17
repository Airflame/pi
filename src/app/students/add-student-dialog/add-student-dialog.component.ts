import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Student } from 'src/app/data.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {
  public disciplines: String[] = ["Informatyka", "Elektronika"];
  public student;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    let students = this.dataService.getStudents();
    this.student = {} as Student;
    this.student.id = students[students.length - 1].id + 1;
  }

}
