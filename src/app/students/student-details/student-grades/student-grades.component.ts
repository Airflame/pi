import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Grade } from 'src/app/data.service';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {
  @Input() grades: Grade[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
