import { Injectable } from '@angular/core';

export enum Week {
  ALL,
  N,
  P,
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
  teacher: Teacher;
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
  closed: boolean;
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
      id: 221,
      firstName: 'Marceli',
      lastName: 'Jóźwiak',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 222,
      firstName: 'Laura',
      lastName: 'Wolska',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 223,
      firstName: 'Julia',
      lastName: 'Górecka',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 224,
      firstName: 'Filip',
      lastName: 'Pietrzak',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 225,
      firstName: 'Nikodem',
      lastName: 'Bednarek',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 226,
      firstName: 'Dawid',
      lastName: 'Krupa',
      discipline: 'Informatyka',
      classYear: 'II',
    },
    {
      id: 227,
      firstName: 'Remigiusz',
      lastName: 'Wawrzyniak',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 228,
      firstName: 'Lucjan',
      lastName: 'Madej',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 229,
      firstName: 'Julia',
      lastName: 'Kowalczyk',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 230,
      firstName: 'Błażej',
      lastName: 'Górski',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 231,
      firstName: 'Łucja',
      lastName: 'Sikorska',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 232,
      firstName: 'Kazimiera',
      lastName: 'Łuczak',
      discipline: 'Informatyka',
      classYear: 'I',
    },
    {
      id: 233,
      firstName: 'Lena',
      lastName: 'Urbaniak',
      discipline: 'Elektronika',
      classYear: 'I',
    },
    {
      id: 234,
      firstName: 'Kazimierz',
      lastName: 'Nowakowski',
      discipline: 'Elektronika',
      classYear: 'I',
    },
    {
      id: 235,
      firstName: 'Nataniel',
      lastName: 'Piotrowski',
      discipline: 'Elektronika',
      classYear: 'I',
    },
    {
      id: 236,
      firstName: 'Amelia',
      lastName: 'Nawrocka',
      discipline: 'Elektronika',
      classYear: 'I',
    },
    {
      id: 237,
      firstName: 'Mariola',
      lastName: 'Wesołowska',
      discipline: 'Elektronika',
      classYear: 'I',
    },
  ];
  private teachers: Teacher[] = [
    {
      id: 1,
      title: 'prof. dr hab. inż.',
      firstName: 'Jan',
      lastName: 'Kowalski',
      faculty: 'Katedra Elektroniki',
    },
    {
      id: 2,
      title: 'mgr',
      firstName: 'Adam',
      lastName: 'Nowak',
      faculty: 'Katedra Elektroniki',
    },
    {
      id: 3,
      title: 'dr inż.',
      firstName: 'Justyna',
      lastName: 'Zalewska',
      faculty: 'Katedra Inżynierii Komputerowej',
    },
    {
      id: 4,
      title: 'dr',
      firstName: 'Anita',
      lastName: 'Ratajczak',
      faculty: 'Instytut Matematyki',
    },
    {
      id: 5,
      title: 'dr inż.',
      firstName: 'Wiktor',
      lastName: 'Michalak',
      faculty: 'Katedra Inżynierii Komputerowej',
    },
    {
      id: 6,
      title: 'dr',
      firstName: 'Wanda',
      lastName: 'Piątek',
      faculty: 'Instytut Matematyki',
    },
  ];
  private subjects: Subject[] = [
    {
      name: 'Fizyka',
      semester: 1,
      discipline: 'Informatyka',
      ects: 3,
    },
    {
      name: 'Matematyka dyskretna',
      semester: 1,
      discipline: 'Informatyka',
      ects: 5,
    },
    {
      name: 'Podstawy programowania',
      semester: 1,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Analiza matematyczna',
      semester: 1,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Technika cyfrowa',
      semester: 2,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Algorytmy i złożoność obliczeniowa',
      semester: 2,
      discipline: 'Informatyka',
      ects: 5,
    },
    {
      name: 'Języki i paradygmaty programowania',
      semester: 2,
      discipline: 'Informatyka',
      ects: 3,
    },
    {
      name: 'Algebra liniowa',
      semester: 2,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Probabilistyka i statystyka',
      semester: 3,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Metody numeryczne',
      semester: 3,
      discipline: 'Informatyka',
      ects: 5,
    },
    {
      name: 'Systemy operacyjne',
      semester: 3,
      discipline: 'Informatyka',
      ects: 4,
    },
    {
      name: 'Technologie sieciowe',
      semester: 3,
      discipline: 'Informatyka',
      ects: 3,
    },
  ];
  private groups: Group[] = [
    {
      id: 1,
      subject: this.subjects[0],
      teacher: this.teachers[0],
      room: '3A',
      max: 15,
      week: Week.ALL,
      day: 1,
      fromHour: '08:00',
      toHour: '10:00',
      closed: true,
    },
    {
      id: 2,
      subject: this.subjects[1],
      teacher: this.teachers[3],
      room: '4A',
      max: 14,
      week: Week.ALL,
      day: 1,
      fromHour: '10:00',
      toHour: '12:00',
      closed: true,
    },
    {
      id: 3,
      subject: this.subjects[2],
      teacher: this.teachers[2],
      room: '3B',
      max: 6,
      week: Week.N,
      day: 2,
      fromHour: '12:00',
      toHour: '15:00',
      closed: true,
    },
    {
      id: 4,
      subject: this.subjects[3],
      teacher: this.teachers[5],
      room: '3B',
      max: 7,
      week: Week.P,
      day: 3,
      fromHour: '08:00',
      toHour: '11:00',
      closed: true,
    },
    {
      id: 5,
      subject: this.subjects[4],
      teacher: this.teachers[1],
      room: '3A',
      max: 6,
      week: Week.ALL,
      day: 2,
      fromHour: '15:00',
      toHour: '17:00',
      closed: true,
    },
    {
      id: 6,
      subject: this.subjects[5],
      teacher: this.teachers[2],
      room: '4A',
      max: 5,
      week: Week.ALL,
      day: 5,
      fromHour: '08:00',
      toHour: '10:00',
      closed: true,
    },
    {
      id: 7,
      subject: this.subjects[6],
      teacher: this.teachers[4],
      room: '3B',
      max: 8,
      week: Week.N,
      day: 5,
      fromHour: '10:00',
      toHour: '12:00',
      closed: true,
    },
    {
      id: 8,
      subject: this.subjects[7],
      teacher: this.teachers[5],
      room: '3B',
      max: 9,
      week: Week.P,
      day: 5,
      fromHour: '13:00',
      toHour: '15:00',
      closed: true,
    },
    {
      id: 9,
      subject: this.subjects[8],
      teacher: this.teachers[3],
      room: '3A',
      max: 11,
      week: Week.ALL,
      day: 4,
      fromHour: '15:00',
      toHour: '17:00',
      closed: false,
    },
    {
      id: 10,
      subject: this.subjects[9],
      teacher: this.teachers[1],
      room: '4A',
      max: 12,
      week: Week.ALL,
      day: 4,
      fromHour: '08:00',
      toHour: '10:00',
      closed: false,
    },
    {
      id: 11,
      subject: this.subjects[10],
      teacher: this.teachers[2],
      room: '3B',
      max: 17,
      week: Week.N,
      day: 4,
      fromHour: '10:00',
      toHour: '12:00',
      closed: false,
    },
    {
      id: 12,
      subject: this.subjects[11],
      teacher: this.teachers[4],
      room: '3B',
      max: 12,
      week: Week.P,
      day: 4,
      fromHour: '13:00',
      toHour: '15:00',
      closed: false,
    },
    {
      id: 13,
      subject: this.subjects[0],
      teacher: this.teachers[0],
      room: '3A',
      max: 6,
      week: Week.ALL,
      day: 1,
      fromHour: '09:00',
      toHour: '11:00',
      closed: false,
    },
    {
      id: 14,
      subject: this.subjects[1],
      teacher: this.teachers[3],
      room: '4A',
      max: 15,
      week: Week.ALL,
      day: 1,
      fromHour: '11:00',
      toHour: '13:00',
      closed: false,
    },
    {
      id: 15,
      subject: this.subjects[2],
      teacher: this.teachers[2],
      room: '3B',
      max: 13,
      week: Week.N,
      day: 2,
      fromHour: '13:00',
      toHour: '16:00',
      closed: false,
    },
    {
      id: 16,
      subject: this.subjects[3],
      teacher: this.teachers[5],
      room: '3B',
      max: 12,
      week: Week.P,
      day: 3,
      fromHour: '09:00',
      toHour: '12:00',
      closed: false,
    },
  ];
  private enrollments: Enrollment[] = [
    {
      group: this.groups[0],
      student: this.students[0],
      grade: 3.5,
    },
    {
      group: this.groups[0],
      student: this.students[1],
      grade: 4.5,
    },
    {
      group: this.groups[0],
      student: this.students[2],
      grade: 3.0,
    },
    {
      group: this.groups[0],
      student: this.students[3],
      grade: 4.5,
    },
    {
      group: this.groups[0],
      student: this.students[4],
      grade: 4.0,
    },
    {
      group: this.groups[0],
      student: this.students[5],
      grade: 5.0,
    },
    {
      group: this.groups[1],
      student: this.students[0],
      grade: 3.5,
    },
    {
      group: this.groups[1],
      student: this.students[1],
      grade: 3.5,
    },
    {
      group: this.groups[1],
      student: this.students[2],
      grade: 4.0,
    },
    {
      group: this.groups[1],
      student: this.students[3],
      grade: 3.5,
    },
    {
      group: this.groups[1],
      student: this.students[4],
      grade: 5.0,
    },
    {
      group: this.groups[1],
      student: this.students[5],
      grade: 3.0,
    },
    {
      group: this.groups[2],
      student: this.students[0],
      grade: 4.5,
    },
    {
      group: this.groups[2],
      student: this.students[1],
      grade: 4.0,
    },
    {
      group: this.groups[2],
      student: this.students[2],
      grade: 4.0,
    },
    {
      group: this.groups[2],
      student: this.students[3],
      grade: 3.5,
    },
    {
      group: this.groups[2],
      student: this.students[4],
      grade: 4.5,
    },
    {
      group: this.groups[2],
      student: this.students[5],
      grade: 5.0,
    },
    {
      group: this.groups[3],
      student: this.students[0],
      grade: 3.5,
    },
    {
      group: this.groups[3],
      student: this.students[1],
      grade: 3.0,
    },
    {
      group: this.groups[3],
      student: this.students[2],
      grade: 3.0,
    },
    {
      group: this.groups[3],
      student: this.students[3],
      grade: 4.5,
    },
    {
      group: this.groups[3],
      student: this.students[4],
      grade: 5.0,
    },
    {
      group: this.groups[3],
      student: this.students[5],
      grade: 5.0,
    },
    {
      group: this.groups[4],
      student: this.students[0],
      grade: 4.5,
    },
    {
      group: this.groups[4],
      student: this.students[1],
      grade: 3.5,
    },
    {
      group: this.groups[4],
      student: this.students[2],
      grade: 4.5,
    },
    {
      group: this.groups[4],
      student: this.students[3],
      grade: 3.5,
    },
    {
      group: this.groups[4],
      student: this.students[4],
      grade: 3.0,
    },
    {
      group: this.groups[4],
      student: this.students[5],
      grade: 4.0,
    },
    {
      group: this.groups[5],
      student: this.students[0],
      grade: 4.0,
    },
    {
      group: this.groups[5],
      student: this.students[1],
      grade: 3.0,
    },
    {
      group: this.groups[5],
      student: this.students[2],
      grade: 4.0,
    },
    {
      group: this.groups[5],
      student: this.students[3],
      grade: 3.0,
    },
    {
      group: this.groups[5],
      student: this.students[4],
      grade: 3.5,
    },
    {
      group: this.groups[5],
      student: this.students[5],
      grade: 4.5,
    },
    {
      group: this.groups[6],
      student: this.students[0],
      grade: 3.0,
    },
    {
      group: this.groups[6],
      student: this.students[1],
      grade: 3.5,
    },
    {
      group: this.groups[6],
      student: this.students[2],
      grade: 4.5,
    },
    {
      group: this.groups[6],
      student: this.students[3],
      grade: 5.0,
    },
    {
      group: this.groups[6],
      student: this.students[4],
      grade: 4.5,
    },
    {
      group: this.groups[6],
      student: this.students[5],
      grade: 3.5,
    },
    {
      group: this.groups[7],
      student: this.students[0],
      grade: 3.5,
    },
    {
      group: this.groups[7],
      student: this.students[1],
      grade: 4.5,
    },
    {
      group: this.groups[7],
      student: this.students[2],
      grade: 3.5,
    },
    {
      group: this.groups[7],
      student: this.students[3],
      grade: 4.5,
    },
    {
      group: this.groups[7],
      student: this.students[4],
      grade: 4.0,
    },
    {
      group: this.groups[7],
      student: this.students[5],
      grade: 4.5,
    },
    {
      group: this.groups[8],
      student: this.students[0],
      grade: null,
    },
    {
      group: this.groups[8],
      student: this.students[1],
      grade: null,
    },
    {
      group: this.groups[8],
      student: this.students[2],
      grade: null,
    },
    {
      group: this.groups[8],
      student: this.students[3],
      grade: null,
    },
    {
      group: this.groups[8],
      student: this.students[4],
      grade: null,
    },
    {
      group: this.groups[8],
      student: this.students[5],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[0],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[1],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[2],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[3],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[4],
      grade: null,
    },
    {
      group: this.groups[9],
      student: this.students[5],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[0],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[1],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[2],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[3],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[4],
      grade: null,
    },
    {
      group: this.groups[10],
      student: this.students[5],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[0],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[1],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[2],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[3],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[4],
      grade: null,
    },
    {
      group: this.groups[11],
      student: this.students[5],
      grade: null,
    },
  ];

  private disciplines: string[] = ['Informatyka', 'Elektronika'];
  private classYears: string[] = ['I', 'II', 'III', 'IV', 'V'];
  private titles: string[] = [
    'inż.',
    'mgr inż.',
    'dr inż.',
    'dr hab. inż.',
    'prof. dr hab. inż.',
  ];
  private faculties: string[] = [
    'Katedra Inżynierii Komputerowej',
    'Katedra Elektroniki',
    'Instytut Matematyki',
  ];
  private days: string[] = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt'];
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
    let avatar = this.studentAvatars.find((av) => av.id === id);
    if (avatar != null) avatar.image = image;
    else this.studentAvatars.push({ id, image } as Avatar);
  }

  public getStudentAvatar(id: number): string | ArrayBuffer {
    let avatar: Avatar = this.studentAvatars.find((a) => a.id == id);
    if (avatar != null) return avatar.image;
    else return '../../assets/images/blank.png';
  }

  public addTeacherAvatar(id: number, image: ArrayBuffer) {
    let avatar = this.teacherAvatars.find((av) => av.id === id);
    if (avatar != null) avatar.image = image;
    else this.teacherAvatars.push({ id, image } as Avatar);
  }

  public getTeacherAvatar(id: number): string | ArrayBuffer {
    let avatar: Avatar = this.teacherAvatars.find((a) => a.id == id);
    if (avatar != null) return avatar.image;
    else return '../../assets/images/blank.png';
  }

  public editStudent(student: Student) {
    const edited = this.students.filter((s) => s.id == student.id)[0];
    edited.firstName = student.firstName;
    edited.lastName = student.lastName;
    edited.discipline = student.discipline;
    edited.classYear = student.classYear;
  }

  public editTeacher(teacher: Teacher) {
    const edited = this.teachers.filter((t) => t.id == teacher.id)[0];
    edited.title = teacher.title;
    edited.firstName = teacher.firstName;
    edited.lastName = teacher.lastName;
    edited.faculty = teacher.faculty;
  }

  public deleteStudent(student: Student) {
    const id = this.students.findIndex((s) => s.id == student.id);
    this.students.splice(id, 1);
  }

  public deleteTeacher(teacher: Teacher) {
    const id = this.teachers.findIndex((t) => t.id == teacher.id);
    this.teachers.splice(id, 1);
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getEnrolledStudents(group: Group): Student[] {
    return this.enrollments
      .filter((e) => e.group.id == group.id)
      .map((e) => e.student).sort((a, b) => {
        return a.lastName > b.lastName ? 1 : -1
      });
  }

  public getAvailableStudents(group: Group): Student[] {
    return this.students.filter(
      (s) =>
        s.discipline == group.subject.discipline &&
        this.semesterInYear(group.subject.semester, s.classYear) &&
        this.enrollments.find(
          (e) => e.group.id == group.id && e.student.id == s.id
        ) == null
    );
  }

  public deleteEnrolledStudent(group: Group, student: Student): void {
    const id = this.enrollments.findIndex(
      (e) => e.group.id == group.id && e.student.id == student.id
    );
    this.enrollments.splice(id, 1);
  }

  public enrollStudents(group: Group, students: Student[]): void {
    let grade: number = null;
    students.forEach((student) =>
      this.enrollments.push({ group, student, grade } as Enrollment)
    );
  }

  public getStudent(id: number) {
    return this.students.find((s) => s.id == id);
  }

  public getTeachers(): Teacher[] {
    return this.teachers.sort((a, b) => {
      return a.lastName > b.lastName ? 1 : -1;
    });
  }

  public getTeacher(id: number) {
    return this.teachers.find((t) => t.id == id);
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

  public getSubjects(): Subject[] {
    return this.subjects;
  }

  public countStudents(group: Group): number {
    return this.enrollments.filter((e) => e.group.id == group.id).length;
  }

  public getGrades(studentId: number): Grade[] {
    return this.enrollments
      .filter((e) => e.student.id == studentId && e.grade != null)
      .map((e) => this.mapToGrade(e));
  }

  public addGroup(group: Group) {
    this.groups.push(group);
  }

  public editGroup(group: Group) {
    const edited = this.groups.filter((g) => g.id == group.id)[0];
    edited.max = group.max;
    edited.room = group.room;
    edited.subject = group.subject;
    edited.teacher = group.teacher;
    edited.toHour = group.toHour;
  }

  public deleteGroup(group: Group) {
    const id = this.teachers.findIndex((g) => g.id == group.id);
    this.groups.splice(id, 1);
    this.enrollments = this.enrollments.filter((e) => e.group.id != group.id);
  }

  public getGroup(id: number): Group {
    return this.groups.find((g) => g.id == id);
  }

  public getGroups(): Group[] {
    return this.groups.sort((a, b) => {
      if (a.closed == b.closed) {
        if (a.subject.discipline == b.subject.discipline) {
          if (a.subject.semester == b.subject.semester)
            return a.subject.name > b.subject.name ? 1 : -1;
          else return a.subject.semester - b.subject.semester;
        } else return a.subject.discipline > b.subject.discipline ? 1 : -1;
      } else return a.closed > b.closed ? 1 : -1;
    });
  }

  public getGroupsByStudentId(studentId: number): Group[] {
    return this.enrollments
      .filter(
        (e) =>
          e.student.id == studentId &&
          e.group.closed == false
      )
      .map((e) => e.group)
      .sort((a, b) => {
        if (a.day == b.day) return a.fromHour > b.fromHour ? 1 : -1;
        else return a.day - b.day;
      });
  }

  public getGroupsByTeacherId(teacherId: number): Group[] {
    return this.groups
      .filter((g) => g.teacher.id == teacherId && g.closed == false)
      .sort((a, b) => {
        if (a.day == b.day) return a.fromHour > b.fromHour ? 1 : -1;
        else return a.day - b.day;
      });
  }

  private mapToGrade(enrollment: Enrollment): Grade {
    let grade = {} as Grade;
    grade.studentId = enrollment.student.id;
    grade.subject = enrollment.group.subject;
    grade.teacher = enrollment.group.teacher;
    grade.grade = enrollment.grade;
    return grade;
  }

  public getDay(day: number): string {
    return this.days[day - 1];
  }

  public getStudentGrade(group: Group, student: Student): number {
    return this.enrollments.find(
      (e) => e.group.id == group.id && e.student.id == student.id
    ).grade;
  }

  public setStudentGrade(group: Group, student: Student, grade: number): void {
    this.enrollments.find(
      (e) => e.group.id == group.id && e.student.id == student.id
    ).grade = grade;
  }

  public getAvailableGrades(): number[] {
    return [2.0, 3.0, 3.5, 4.0, 4.5, 5.0];
  }

  private semesterInYear(semester: number, year: string): boolean {
    if (year == 'I' && (semester == 1 || semester == 2)) return true;
    if (year == 'II' && (semester == 3 || semester == 4)) return true;
    if (year == 'III' && (semester == 5 || semester == 6)) return true;
    if (year == 'IV' && (semester == 7 || semester == 8)) return true;
    if (year == 'V' && (semester == 9 || semester == 10)) return true;
    return false;
  }
}
