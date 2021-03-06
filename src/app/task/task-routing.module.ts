import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskHomeComponent} from './task-home/task-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'taskList', pathMatch: 'full'},
  {path: 'taskList/:id', component: TaskHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
