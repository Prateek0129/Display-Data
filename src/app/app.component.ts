import { Component } from '@angular/core';
import { ModifyService } from './modify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  

  constructor(public modifyService: ModifyService) {}
  ngOnInit() {
    this.modifyService.fetchData();
}
  
}
