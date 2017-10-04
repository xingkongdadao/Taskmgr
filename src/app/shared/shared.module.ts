import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdRadioModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule,
  MdChipsModule,
  MdTabsModule,
  MdButtonToggleModule,
  MdProgressBarModule,
  MdSlideToggleModule,
  MdSidenavModule,
  MdSelectionModule,
} from '@angular/material';

import {SharedRoutingModule} from './shared-routing.module';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageListSelectComponent} from './image-list-select/image-list-select.component';
import {AgeInputComponent} from './age-input/age-input.component';
import { ChipsListComponent } from './chips-list/chips-list.component';
import { AreaListComponent } from './area-list/area-list.component';
import { IdentityInputComponent } from './identity-input/identity-input.component';

@NgModule({
  imports: [
    MdProgressBarModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSelectionModule,
    // DirectivesModule,
    CommonModule,
    SharedRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdButtonToggleModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    MdChipsModule,
    MdTabsModule,
  ],
  exports: [
    MdProgressBarModule,
    MdSelectionModule,
    MdSidenavModule,
    MdSlideToggleModule,
    // DirectivesModule,
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdButtonToggleModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    ImageListSelectComponent,
    AgeInputComponent,
    ChipsListComponent,
    MdChipsModule,
    AreaListComponent,
    IdentityInputComponent,
    MdTabsModule,

  ],
  declarations: [
    ConfirmDialogComponent,
    ImageListSelectComponent,
    AgeInputComponent,
    ChipsListComponent,
    AreaListComponent,
    IdentityInputComponent,
  ]
})
export class SharedModule {
}
