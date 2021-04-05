import { Component, Input, OnInit } from '@angular/core';
import { DataService, Group } from 'src/app/data.service';

@Component({
  selector: 'app-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.scss']
})
export class StudentScheduleComponent implements OnInit {
  @Input() groups: Group[];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.groups);
  }

}
