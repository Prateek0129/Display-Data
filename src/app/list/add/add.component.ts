import { Component, OnInit,Input } from '@angular/core';
import { ModifyService } from '../../modify.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
@Input() elementAdd: {task};
  constructor(public modifyService: ModifyService) { }
  addTask(task) {
    this.modifyService.addTask(task);
  }
  ngOnInit() {
  }

}
