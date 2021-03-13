import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }

}
