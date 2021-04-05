import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Teacher } from 'src/app/data.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {
  id: number;
  teacher: Teacher;
  url: string | ArrayBuffer;
  private file: File;

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.teacher = this.dataService.getTeacher(this.id);
    this.url = this.dataService.getTeacherAvatar(this.id);
  }

  handleFileInput(target: EventTarget): void {
    this.file = (target as HTMLInputElement).files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
        this.url = reader.result;
        this.dataService.addTeacherAvatar(this.id, this.url as ArrayBuffer);
    }
  }

}
