import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileSaverService } from 'ngx-filesaver';
import { DataService, Grade, Group, Student } from 'src/app/data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Student;
  url: string | ArrayBuffer;
  grades: Grade[];
  groups: Group[];
  private file: File;

  constructor(private route: ActivatedRoute, public dataService: DataService, private fileSaver: FileSaverService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.student = this.dataService.getStudent(this.id);
    this.url = this.dataService.getStudentAvatar(this.id);
    this.grades = this.dataService.getGrades(this.id);
    this.groups = this.dataService.getGroupsByStudentId(this.id);
  }

  handleFileInput(target: EventTarget): void {
    this.file = (target as HTMLInputElement).files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
        this.url = reader.result;
        this.dataService.addStudentAvatar(this.id, this.url as ArrayBuffer);
    }
  }

}
