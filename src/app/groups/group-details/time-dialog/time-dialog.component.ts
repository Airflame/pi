import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Group, Week } from 'src/app/data.service';

@Component({
  selector: 'app-time-dialog',
  templateUrl: './time-dialog.component.html',
  styleUrls: ['./time-dialog.component.scss'],
})
export class TimeDialogComponent implements OnInit {
  group: Group;
  day: number;
  week: Week;
  timeFrom: { hour: number; minute: number } = { hour: 0, minute: 0 };
  timeTo: { hour: number; minute: number } = { hour: 0, minute: 0 };
  checked: boolean[] = [false, false, false];

  constructor(public modal: NgbActiveModal, public dataService: DataService) {}

  ngOnInit(): void {
    this.day = this.group.day;
    this.week = this.group.week;
    if (this.week == Week.ALL)
      this.checked[0] = true;
    if (this.week == Week.N)
      this.checked[1] = true;
    if (this.week == Week.P)
      this.checked[2] = true;
    this.timeFrom.hour = Number.parseInt(this.group.fromHour.slice(0, 2));
    this.timeFrom.minute = Number.parseInt(this.group.fromHour.slice(3, 5));
    this.timeTo.hour = Number.parseInt(this.group.toHour.slice(0, 2));
    this.timeTo.minute = Number.parseInt(this.group.toHour.slice(3, 5));
  }

  selectWeek(selected: string) {
    if (selected == 'N') this.week = Week.N;
    else if (selected == 'P') this.week = Week.P;
    else this.week = Week.ALL;
  }

  save(): void {
    this.group.fromHour =
      String(this.timeFrom.hour).padStart(2, '0') +
      ':' +
      String(this.timeFrom.minute).padStart(2, '0');
    this.group.toHour =
      String(this.timeTo.hour).padStart(2, '0') +
      ':' +
      String(this.timeTo.minute).padStart(2, '0');
    this.group.day = this.day;
    this.group.week = this.week;
  }
}
