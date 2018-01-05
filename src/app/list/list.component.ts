import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks;
  subscription;
  ngOnInit() {
    this.tasks= this.modifyService.tasks; 
}
  constructor(public modifyService: ModifyService) { 
    this.subscription = this.modifyService.taskList.subscribe((tasks) => {
      this.tasks = tasks;
    }); 
  }
}