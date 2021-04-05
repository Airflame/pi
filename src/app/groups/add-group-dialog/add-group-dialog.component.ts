import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataService, Group, Subject, Teacher } from 'src/app/data.service';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.scss'],
})
export class AddGroupDialogComponent implements OnInit {
  allSubjects: Subject[];
  subjects: Subject[];
  teachers: Teacher[];
  disciplines: string[];
  semesters: number[];
  selectedDiscipline: string;
  selectedSemester: number;
  group: Group;

  constructor(public modal: NgbActiveModal, private dataService: DataService) {}

  ngOnInit(): void {
    this.allSubjects = this.dataService.getSubjects();
    this.subjects = this.allSubjects;
    this.disciplines = this.dataService.getDisciplines();
    this.semesters = [...new Set(this.allSubjects.map((s) => s.semester))];
    let groups = this.dataService.getGroups();
    this.group = {} as Group;
    this.group.id = groups[groups.length - 1].id + 1;
    this.group.closed = true;
    this.teachers = this.dataService.getTeachers();
  }

  save(): void {
    this.dataService.addGroup(this.group);
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
