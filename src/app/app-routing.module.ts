import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'teachers', component: TeachersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
