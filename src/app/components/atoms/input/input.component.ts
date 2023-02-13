import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() typeInput: string = "";
  @Input() idInput: string = "";
  @Input() nameInput: string = "";
  @Input() formControlNameInput: string = "";
  @Input() formGroupInput!: FormGroup;
}

