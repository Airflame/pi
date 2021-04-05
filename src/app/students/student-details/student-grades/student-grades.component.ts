import { Component, Input, OnInit } from '@angular/core';
import { DataService, Grade, Group } from 'src/app/data.service';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss'],
})
export class StudentGradesComponent implements OnInit {
  @Input() id: number;
  allGrades: Grade[];
  grades: Grade[];
  semesters: number[];
  selectedSemester: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.allGrades = this.dataService.getGrades(this.id);
    this.grades = this.allGrades;
    this.semesters = [...new Set(this.grades.map((g) => g.subject.semester))];
  }

  filter(): void {
    if (this.selectedSemester != null)
      this.grades = this.allGrades.filter(
        (grade) => grade.subject.semester == this.selectedSemester
      );
    else this.grades = this.allGrades;
  }
}
