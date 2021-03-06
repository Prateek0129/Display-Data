import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModifyService } from '../modify.service';
import { element } from 'protractor';
import { List } from './../list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks;
  
  constructor(public modifyService: ModifyService) {
    this.modifyService.taskList.subscribe((tasks) => {
      this.tasks = tasks;
    });
}
  
  ngOnInit() {
   this.getList();
}
  
  getList(): void {
    this.modifyService.getList()
    .subscribe(tasks =>
      this.tasks = tasks) 
    }
}