import { Component, Input, OnInit } from '@angular/core';
import { DataService, Grade, Group } from 'src/app/data.service';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {
  @Input() id: number;
  grades: Grade[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.grades = this.dataService.getGrades(this.id);
  }

}
