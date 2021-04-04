import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  discipline: string;
  classYear: string;
}

export interface Avatar {
  id: number;
  image: ArrayBuffer;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private students: Student[] = [
    {
      id: 123,
      firstName: 'Jan',
      lastName: 'Kowalski',
      discipline: 'Informatyka',
      classYear: 'I'
    },
    {
      id: 124,
      firstName: 'Adam',
      lastName: 'Nowak',
      discipline: 'Informatyka',
      classYear: 'II'
    },
    {
      id: 125,
      firstName: 'Julia',
      lastName: 'Zalewska',
      discipline: 'Informatyka',
      classYear: 'I'
    },
    {
      id: 2137,
      firstName: 'Karol',
      lastName: 'Wojtyła',
      discipline: 'Informatyka',
      classYear: 'XD'
    },
  ];
  private disciplines: string[] = ["Informatyka", "Elektronika"];
  private classYears: string[] = ["I", "II", "III", "IV", "V"];
  private studentAvatars: Avatar[];

  constructor() {
    this.studentAvatars = [] as Avatar[];
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public addStudentAvatar(id: number, image: ArrayBuffer) {
    let avatar = this.studentAvatars.find(av => av.id = id);
    if (avatar != null)
      avatar.image = image;
    else
      this.studentAvatars.push({id, image} as Avatar);
  }

  public getStudentAvatar(id: number): ArrayBuffer {
    let avatar: Avatar = this.studentAvatars.find(a => a.id == id);
    if (avatar != null)
      return avatar.image;
    else
      return null;
  }

  public editStudent(student: Student) {
    const edited = this.students.filter(s => s.id == student.id)[0];
    edited.firstName = student.firstName;
    edited.lastName = student.lastName;
    edited.discipline = student.discipline;
    edited.classYear = student.classYear;
  }

  public deleteStudent(student: Student) {
    const id = this.students.findIndex(s => s.id == student.id);
    this.students.splice(id, 1);
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getStudent(id: number) {
    return this.students.find(s => s.id == id);
  }

  public getDisciplines(): string[] {
    return this.disciplines;
  }

  public getClassYears(): string[] {
    return this.classYears;
  }
}
