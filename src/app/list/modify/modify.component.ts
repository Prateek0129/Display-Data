import { Component, OnInit, Input } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
 @Input() element: {id:number,task:string,active:boolean };
  constructor(public modifyService: ModifyService) { }
 
  onCheck(element) {
  this.modifyService.onCheck(element);
  }
  onDelete(id) {
    this.modifyService.onDelete(id);
  }
  ngOnInit() {
  }
}
