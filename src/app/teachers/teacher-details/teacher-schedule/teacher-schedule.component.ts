import { Component, Input, OnInit } from '@angular/core';
import { DataService, Group, Week } from 'src/app/data.service';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.scss']
})
export class TeacherScheduleComponent implements OnInit {
  @Input() id: number;
  allGroups: Group[];
  groups: Group[];
  selectedWeek: Week = Week.ALL;
  weekP: Week = Week.P;
  weekN: Week = Week.N;
  weekAll: Week = Week.ALL;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.allGroups = this.dataService.getGroupsByTeacherId(this.id);
    this.groups = this.allGroups;
  }

  filter(): void {
    if (this.selectedWeek != Week.ALL)
      this.groups = this.allGroups.filter(
        (group) => group.week == this.selectedWeek || group.week == Week.ALL
      );
    else this.groups = this.allGroups;
  }
}
