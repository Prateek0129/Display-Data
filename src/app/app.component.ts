import { Component } from '@angular/core';
import { ModifyService } from './modify.service';
import { List } from './list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  

  constructor(public modifyService: ModifyService) {}
  ngOnInit() {
    this.modifyService.fetchData().subscribe(
      (data: [List]) => {
        this.setList(data);
      }
    )
}
  setList(tasks) {
    this.modifyService.setList(tasks);
}
  
}
