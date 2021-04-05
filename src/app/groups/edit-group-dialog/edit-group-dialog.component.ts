import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Group, Subject, Teacher } from 'src/app/data.service';

@Component({
  selector: 'app-edit-group-dialog',
  templateUrl: './edit-group-dialog.component.html',
  styleUrls: ['./edit-group-dialog.component.scss']
})
export class EditGroupDialogComponent implements OnInit {
  allSubjects: Subject[];
  subjects: Subject[];
  teachers: Teacher[];
  disciplines: string[];
  semesters: number[];
  selectedDiscipline: string;
  selectedSemester: number;
  public initialGroup: Group;
  group: Group = {} as Group;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.allSubjects = this.dataService.getSubjects();
    this.teachers = this.dataService.getTeachers();
    this.subjects = this.allSubjects;
    this.disciplines = this.dataService.getDisciplines();
    this.semesters = [...new Set(this.allSubjects.map((s) => s.semester))];
    this.group.id = this.initialGroup.id;
    this.group.closed = this.initialGroup.closed;
    this.group.day = this.initialGroup.day;
    this.group.fromHour = this.initialGroup.fromHour;
    this.group.max = this.initialGroup.max;
    this.group.room = this.initialGroup.room;
    this.group.subject = this.initialGroup.subject;
    this.group.teacher = this.initialGroup.teacher;
    this.group.toHour = this.initialGroup.toHour;
    this.group.week = this.initialGroup.week;
    this.selectedDiscipline = this.group.subject.discipline;
    this.selectedSemester = this.group.subject.semester;
  }

  save(): void {
    this.dataService.editGroup(this.group);
  }

  filter(): void {
    this.subjects = this.allSubjects;
    if (this.selectedDiscipline != null) {
      this.subjects = this.subjects.filter(
        (s) => s.discipline == this.selectedDiscipline
      );
      if (this.group.subject != null)
        if (this.group.subject.discipline != this.selectedDiscipline)
          this.group.subject = null;
    }
    if (this.selectedSemester != null) {
      this.subjects = this.subjects.filter(
        (s) => s.semester == this.selectedSemester
      );
      if (this.group.subject != null)
        if (this.group.subject.semester != this.selectedSemester)
          this.group.subject = null;
    }
  }

}
