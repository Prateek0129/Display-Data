import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ModifyComponent } from './list/modify/modify.component';
import { ModifyService } from './modify.service';
import { AddComponent } from './list/add/add.component';
import { StatsComponent } from './list/stats/stats.component';
import { ListRoutingModule } from './/list-routing.module';
import { EditComponent } from './list/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ModifyComponent,
    AddComponent,
    StatsComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ListRoutingModule,
    HttpClientModule,
  ],
  providers: [ModifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
