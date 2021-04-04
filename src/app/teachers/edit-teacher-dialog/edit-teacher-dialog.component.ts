import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Teacher } from 'src/app/data.service';

@Component({
  selector: 'app-edit-teacher-dialog',
  templateUrl: './edit-teacher-dialog.component.html',
  styleUrls: ['./edit-teacher-dialog.component.scss']
})
export class EditTeacherDialogComponent implements OnInit {
  public titles: string[];
  public faculties: string[];
  public initialTeacher: Teacher;
  public teacher: Teacher = {} as Teacher;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.titles = this.dataService.getTitles();
    this.faculties = this.dataService.getFaculties();
    this.teacher.id = this.initialTeacher.id;
    this.teacher.title = this.initialTeacher.title;
    this.teacher.firstName = this.initialTeacher.firstName;
    this.teacher.lastName = this.initialTeacher.lastName;
    this.teacher.faculty = this.initialTeacher.faculty;
  }

  save(): void {
    this.dataService.editTeacher(this.teacher);
  }

}
