import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {QuoteEffects} from './quote.effects';
import {AuthEffects} from './auth.effects';

@NgModule({
  imports: [
    EffectsModule.run(QuoteEffects),
    EffectsModule.run(AuthEffects),
    CommonModule
  ],
  declarations: []
})
export class AppEffectsModule { }
