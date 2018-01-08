import { Component, OnInit, Input } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
 @Input() element: {id:number,task:string,active:boolean };
 @Input() index: number;
  constructor(public modifyService: ModifyService) { }
 
  onCheck(index) {
  this.modifyService.onCheck(index);
  }
  onDelete(index) {
    this.modifyService.onDelete(index);
  }
  ngOnInit() {
  }
}
