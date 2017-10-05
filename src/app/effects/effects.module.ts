import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {QuoteEffects} from './quote.effects';

@NgModule({
  imports: [
    EffectsModule.run(QuoteEffects),
    CommonModule
  ],
  declarations: []
})
export class AppEffectsModule { }
