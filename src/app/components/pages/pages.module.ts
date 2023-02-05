import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PokemonDataService } from './pokemon-data.service';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    PokemonDataService
  ]
})
export class PagesModule { }
