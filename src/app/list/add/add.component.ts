import { Component, OnInit,Input } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
@Input() element: {id: number,task: string};
  constructor(public modifyService: ModifyService) { }
  addTask(id,task) {
    this.modifyService.addTask(id,task);
  }
  ngOnInit() {
  }

}
