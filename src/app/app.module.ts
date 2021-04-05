import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component';

import { NgbdSortableHeader } from './students/sortable.directive';
import { FormsModule } from '@angular/forms';
import { AddStudentDialogComponent } from './students/add-student-dialog/add-student-dialog.component';
import { EditStudentDialogComponent } from './students/edit-student-dialog/edit-student-dialog.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { FileSaverModule } from 'ngx-filesaver';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherDialogComponent } from './teachers/add-teacher-dialog/add-teacher-dialog.component';
import { EditTeacherDialogComponent } from './teachers/edit-teacher-dialog/edit-teacher-dialog.component';
import { StudentGradesComponent } from './students/student-details/student-grades/student-grades.component';
import { StudentScheduleComponent } from './students/student-details/student-schedule/student-schedule.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { TeacherScheduleComponent } from './teachers/teacher-details/teacher-schedule/teacher-schedule.component';
import { GroupsComponent } from './groups/groups.component';
import { AddGroupDialogComponent } from './groups/add-group-dialog/add-group-dialog.component';
import { EditGroupDialogComponent } from './groups/edit-group-dialog/edit-group-dialog.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NgbdSortableHeader,
    AddStudentDialogComponent,
    EditStudentDialogComponent,
    StudentDetailsComponent,
    TeachersComponent,
    AddTeacherDialogComponent,
    EditTeacherDialogComponent,
    StudentGradesComponent,
    StudentScheduleComponent,
    TeacherDetailsComponent,
    TeacherScheduleComponent,
    GroupsComponent,
    AddGroupDialogComponent,
    EditGroupDialogComponent,
    GroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
