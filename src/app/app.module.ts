import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ModifyComponent } from './list/modify/modify.component';
import { ModifyService } from './modify.service';
import { AddComponent } from './list/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ModifyComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ModifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
