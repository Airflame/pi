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
    StudentScheduleComponent
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
