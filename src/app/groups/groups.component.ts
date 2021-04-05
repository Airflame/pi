import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService, Group } from '../data.service';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { GroupsService } from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups$: Observable<Group[]>;
  total$: Observable<number>;
  selectedDiscipline: string;
  selectedSemester: number;

  constructor(
    public groupsService: GroupsService,
    public dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.groups$ = this.groupsService.groups$;
    this.total$ = this.groupsService.total$;
  }

  addGroup(): void {
    const modalRef = this.modalService.open(AddGroupDialogComponent);
    modalRef.result.then(val => {
      this.groupsService.refresh();
    });
  }
}
