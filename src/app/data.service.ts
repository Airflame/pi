import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  discipline: string;
  classYear: string;
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

  constructor() {}

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public editStudent(student: Student) {
    const edited = this.students.filter(s => s.id == student.id)[0];
    edited.firstName = student.firstName;
    edited.lastName = student.lastName;
    edited.discipline = student.discipline;
    edited.classYear = student.classYear;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getDisciplines(): string[] {
    return this.disciplines;
  }

  public getClassYears(): string[] {
    return this.classYears;
  }
}
