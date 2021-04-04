import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Teacher } from 'src/app/data.service';

@Component({
  selector: 'app-add-teacher-dialog',
  templateUrl: './add-teacher-dialog.component.html',
  styleUrls: ['./add-teacher-dialog.component.scss']
})
export class AddTeacherDialogComponent implements OnInit {
  public titles: string[];
  public faculties: string[];
  public teacher: Teacher;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.titles = this.dataService.getTitles();
    this.faculties = this.dataService.getFaculties();
    let teachers = this.dataService.getTeachers();
    this.teacher = {} as Teacher;
    this.teacher.id = teachers[teachers.length - 1].id + 1;
  }

  save(): void {
    this.dataService.addTeacher(this.teacher);
  }

}
