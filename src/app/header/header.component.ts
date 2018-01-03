import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count;
  taskCount;
  subscription;
  constructor(public modifyService: ModifyService) { 
    this.count = this.modifyService.count;
    this.taskCount = this.modifyService.taskCount;
    this.subscription = this.modifyService.counter.subscribe((emitData) => {
      this.count = emitData.count;
      this.taskCount = emitData.taskcount;
    }); 
  }
  
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
