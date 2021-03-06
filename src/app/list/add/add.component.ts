import { Component, OnInit,Input } from '@angular/core';
import { ModifyService } from '../../modify.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(public modifyService: ModifyService, private location: Location) { }
  addTask(task) {
    this.modifyService.addTask(task);
  }
  ngOnInit() { }
  submitted = false;
  onSubmit() { this.submitted = true; }
  goBack(): void {
    this.location.back();
  }
}
