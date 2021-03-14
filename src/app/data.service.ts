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
  students: Student[] = [
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

  constructor() {}

  public getStudents(): Student[] {
    return this.students;
  }
}
