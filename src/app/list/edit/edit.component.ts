import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModifyService } from '../../modify.service';
import { List } from '../../list.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
tasks;
  constructor(
    private route: ActivatedRoute,
    private modifyService: ModifyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }
  
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasks = this.modifyService.getTask(id);
  }
  goBack(): void {
    this.location.back();
  }
}
