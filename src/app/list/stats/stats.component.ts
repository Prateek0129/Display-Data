import { Component, OnInit } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(public modifyService: ModifyService) { }
  onComplete(){
    this.modifyService.onComplete();
  }
  onRemaining(){
    this.modifyService.onRemaining();
  }
  onAll(){
    this.modifyService.onAll();
  }
  ngOnInit() {
  }

}
