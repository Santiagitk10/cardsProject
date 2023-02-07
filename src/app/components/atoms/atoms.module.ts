import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    ImageComponent
  ],
  
  exports: [
    ButtonComponent,
    TitleComponent,
    ImageComponent
  ],

  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
