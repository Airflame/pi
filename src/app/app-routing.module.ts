import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
