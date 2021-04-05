import { Component, Input, OnInit } from '@angular/core';
import { DataService, Group } from 'src/app/data.service';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.scss']
})
export class TeacherScheduleComponent implements OnInit {
  @Input() id: number;
  groups: Group[];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.groups = this.dataService.getGroupsByTeacherId(this.id);
  }

}
