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
  private disciplines: String[] = ["Informatyka", "Elektronika"];
  private classYears: String[] = ["I", "II", "III", "IV", "V"];

  constructor() {}

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getDisciplines(): String[] {
    return this.disciplines;
  }

  public getClassYears(): String[] {
    return this.classYears;
  }
}
