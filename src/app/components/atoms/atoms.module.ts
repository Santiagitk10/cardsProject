import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    ImageComponent,
    LabelComponent,
    InputComponent,
    IconComponent
  ],

  exports: [
    ButtonComponent,
    TitleComponent,
    ImageComponent,
    LabelComponent,
    InputComponent,
    IconComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AtomsModule { }
