import { Component, OnInit, Input } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
 @Input() element: {id:number,task:string,active:boolean };
  todo;

  constructor(public modifyService: ModifyService) { }
 
  onCheck(id) {
  this.modifyService.onCheck(id);
  }
  onSelect(todo) {
    this.todo = this.modifyService.onSelect(todo);
  }
  onDelete(id:number) {
    this.modifyService.onDelete(id);
  }
  ngOnInit() {
  }
}
