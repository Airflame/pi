import { Injectable } from '@angular/core';

export enum Week {
  ALL,
  N,
  P
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  discipline: string;
  classYear: string;
}

export interface Teacher {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  faculty: string;
}

export interface Avatar {
  id: number;
  image: ArrayBuffer;
}

export interface Subject {
  name: string;
  semester: number;
  discipline: string;
  ects: number;
}

export interface Grade {
  studentId: number;
  subject: Subject;
  teacher: string;
  grade: number;
}

export interface Group {
  id: number;
  subject: Subject;
  teacher: Teacher;
  room: string;
  max: number;
  week: Week;
  day: number;
  fromHour: string;
  toHour: string;
}

export interface Enrollment {
  group: Group;
  student: Student;
  grade: number;
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
  private teachers: Teacher[] = [
    {
      id: 1,
      title: "dr inż.",
      firstName: "Jan",
      lastName: "Kowalski",
      faculty: "Katedra Inżynierii Komputerowej"
    },
    {
      id: 2,
      title: "mgr",
      firstName: "Adam",
      lastName: "Nowak",
      faculty: "Katedra Inżynierii Komputerowej"
    },
    {
      id: 3,
      title: "dr inż.",
      firstName: "Justyna",
      lastName: "Zalewska",
      faculty: "Katedra Inżynierii Komputerowej"
    }
  ]
  private subjects: Subject[] = [
    {
      name: "Technika cyfrowa",
      semester: 1,
      discipline: "Informatyka",
      ects: 4
    }
  ]
  private groups: Group[] = [
    {
      id: 1,
      subject: this.subjects[0],
      teacher: this.teachers[0],
      room: "3A",
      max: 25,
      week: Week.ALL,
      day: 1,
      fromHour: "08:00",
      toHour: "10:00"
    }
  ]
  private enrollments: Enrollment[] = [
    {
      group: this.groups[0],
      student: this.students[0],
      grade: 4.5
    }
  ]

  private disciplines: string[] = ["Informatyka", "Elektronika"];
  private classYears: string[] = ["I", "II", "III", "IV", "V"];
  private titles: string[] = ["inż.", "mgr inż.", "dr inż.", "dr hab. inż.", "prof. dr hab. inż."];
  private faculties: string[] = ["Katedra Inżynierii Komputerowej", "Katedra Elektroniki"];
  private studentAvatars: Avatar[];
  private teacherAvatars: Avatar[];

  constructor() {
    this.studentAvatars = [] as Avatar[];
    this.teacherAvatars = [] as Avatar[];
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudentAvatar(id: number, image: ArrayBuffer) {
    let avatar = this.studentAvatars.find(av => av.id === id);
    if (avatar != null)
      avatar.image = image;
    else
      this.studentAvatars.push({id, image} as Avatar);
  }

  public getStudentAvatar(id: number): string | ArrayBuffer {
    let avatar: Avatar = this.studentAvatars.find(a => a.id == id);
    if (avatar != null)
      return avatar.image;
    else
      return "../../assets/images/blank.png";
  }

  public getTeacherAvatar(id: number): string | ArrayBuffer {
    let avatar: Avatar = this.teacherAvatars.find(a => a.id == id);
    if (avatar != null)
      return avatar.image;
    else
      return "../../assets/images/blank.png";
  }

  public editStudent(student: Student) {
    const edited = this.students.filter(s => s.id == student.id)[0];
    edited.firstName = student.firstName;
    edited.lastName = student.lastName;
    edited.discipline = student.discipline;
    edited.classYear = student.classYear;
  }

  public editTeacher(teacher: Teacher) {
    const edited = this.teachers.filter(t => t.id == teacher.id)[0];
    edited.title = teacher.title;
    edited.firstName = teacher.firstName;
    edited.lastName = teacher.lastName;
    edited.faculty = teacher.faculty;
  }

  public deleteStudent(student: Student) {
    const id = this.students.findIndex(s => s.id == student.id);
    this.students.splice(id, 1);
  }

  public deleteTeacher(teacher: Teacher) {
    const id = this.teachers.findIndex(t => t.id == teacher.id);
    this.teachers.splice(id, 1);
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getStudent(id: number) {
    return this.students.find(s => s.id == id);
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }

  public getDisciplines(): string[] {
    return this.disciplines;
  }

  public getClassYears(): string[] {
    return this.classYears;
  }

  public getTitles(): string[] {
    return this.titles;
  }

  public getFaculties(): string[] {
    return this.faculties;
  }

  public getGrades(studentId: number): Grade[] {
    return this.enrollments.filter(e => e.student.id == studentId).map(e => this.mapToGrade(e));
  }

  public getGroups(studentId: number): Group[] {
    return this.enrollments.filter(e => e.student.id == studentId).map(e => e.group);
  }

  private mapToGrade(enrollment: Enrollment): Grade {
    let grade = {} as Grade;
    grade.studentId = enrollment.student.id;
    grade.subject = enrollment.group.subject;
    grade.teacher = enrollment.group.teacher.lastName + " " + enrollment.group.teacher.firstName;
    grade.grade = enrollment.grade;
    return grade;
  }
}
