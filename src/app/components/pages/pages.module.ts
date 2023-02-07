import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PokemonDataService } from './pokemon-data.service';
import { OrganismsModule } from '../organisms/organisms.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    PokemonDataService
  ]
})
export class PagesModule { }
