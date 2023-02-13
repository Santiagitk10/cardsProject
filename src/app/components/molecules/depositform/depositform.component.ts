import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onValue } from '@firebase/database';

@Component({
  selector: 'app-depositform',
  templateUrl: './depositform.component.html',
  styleUrls: ['./depositform.component.scss']
})
export class DepositformComponent {

  frmDeposit: FormGroup
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(){
    this.frmDeposit = new FormGroup({
      amount: new FormControl(null, [Validators.required, Validators.max(200)])
    });

  }


  click(event: MouseEvent){
    this.clickEvent.emit(event);
  }

  deposit(){
    console.log(this.frmDeposit);
  }

}
