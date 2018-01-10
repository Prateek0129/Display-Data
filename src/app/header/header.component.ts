import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  taskCompleted;
  taskCount;
  subscription;
  constructor(public modifyService: ModifyService) { 
    this.taskCompleted = this.modifyService.taskCompleted;
    this.taskCount = this.modifyService.taskCount;
    this.subscription = this.modifyService.counter.subscribe((emitData) => {
      this.taskCompleted = emitData.taskCompleted;
      this.taskCount = emitData.taskCount;
    }); 
  }
  
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
