import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincardComponent } from './logincard/logincard.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    LogincardComponent
  ],

  exports: [
    LogincardComponent
  ],

  imports: [
    CommonModule,
    AtomsModule
  ]
})
export class MoleculesModule { }
