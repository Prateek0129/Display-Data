import { Component, OnInit } from '@angular/core';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks;
  constructor(public modifyService: ModifyService) { }
 
  ngOnInit() {
      this.tasks= this.modifyService.tasks; 
  }

}
