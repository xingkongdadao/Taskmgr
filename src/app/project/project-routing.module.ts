import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {NewProjectComponent} from './new-project/new-project.component';
import {ProjectItemComponent} from './project-item/project-item.component';

const routes: Routes = [
  // {path: 'projectList', component: ProjectListComponent},
  {path: '', redirectTo: 'projectList', pathMatch: 'full'},
  {path: 'projectList', component: ProjectListComponent},
  // {path: 'newProject', component: NewProjectComponent},
  // {path: 'projectItem', component: ProjectItemComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
