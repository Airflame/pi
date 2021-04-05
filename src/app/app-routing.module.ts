import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: TeacherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
