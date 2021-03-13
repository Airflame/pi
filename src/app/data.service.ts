import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  students: Student[] = [
    {
      id: 123,
      firstName: 'asdf',
      lastName: 'fdsa',
    },
    {
      id: 124,
      firstName: 'hhhf',
      lastName: 'zxc',
    },
    {
      id: 125,
      firstName: 'hfgfgf',
      lastName: 'xxxx',
    },
  ];

  constructor() {}

  public getStudents(): Student[] {
    return this.students;
  }
}
