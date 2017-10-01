import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import {SharedModule} from '../shared/shared.module';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent,
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
    ConfirmDialogComponent,
  ],
})
export class ProjectModule { }
