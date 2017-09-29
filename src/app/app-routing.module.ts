import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'project', pathMatch: 'full' },
  {path: 'login', loadChildren: './login/login.module#LoginModule' },
  {path: 'project', loadChildren: './project/project.module#ProjectModule' },
  {path: 'task', loadChildren: './task/task.module#TaskModule' },

  // {path: 'projectList', redirectTo: '/projectList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
