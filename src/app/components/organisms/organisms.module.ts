import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    PokemonListComponent,
    UserDashboardComponent
  ],
  exports: [
    PokemonListComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    AtomsModule
  ]
})
export class OrganismsModule { }
