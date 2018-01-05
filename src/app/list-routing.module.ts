import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './list/add/add.component';
import { EditComponent } from './list/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports:[ RouterModule.forRoot(routes) ],
})
export class ListRoutingModule { }
