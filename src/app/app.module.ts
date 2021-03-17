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

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NgbdSortableHeader,
    AddStudentDialogComponent,
    EditStudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
