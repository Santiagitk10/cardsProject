import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincardComponent } from './logincard/logincard.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { DepositformComponent } from './depositform/depositform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogincardComponent,
    PokemonCardComponent,
    DepositformComponent
  ],

  exports: [
    LogincardComponent,
    PokemonCardComponent,
    DepositformComponent
  ],

  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule
  ]
})
export class MoleculesModule { }
