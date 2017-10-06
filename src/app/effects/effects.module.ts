import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {QuoteEffects} from './quote.effects';
import {AuthEffects} from './auth.effects';
import {ProjectEffects} from "./project.effects";

@NgModule({
  imports: [
    EffectsModule.run(QuoteEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(ProjectEffects),

    CommonModule
  ],
  declarations: []
})
export class AppEffectsModule { }
