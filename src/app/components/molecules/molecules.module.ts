import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincardComponent } from './logincard/logincard.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    LogincardComponent,
    PokemonCardComponent
  ],

  exports: [
    LogincardComponent,
    PokemonCardComponent
  ],

  imports: [
    CommonModule,
    AtomsModule
  ]
})
export class MoleculesModule { }
