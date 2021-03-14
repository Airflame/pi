import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  discipline: string;
  classYear: number;
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
      classYear: 1
    },
    {
      id: 124,
      firstName: 'Adam',
      lastName: 'Nowak',
      discipline: 'Informatyka',
      classYear: 2
    },
    {
      id: 125,
      firstName: 'Julia',
      lastName: 'Zalewska',
      discipline: 'Informatyka',
      classYear: 1
    },
  ];

  constructor() {}

  public getStudents(): Student[] {
    return this.students;
  }
}
