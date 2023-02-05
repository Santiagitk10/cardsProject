import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.scss']
})
export class LogincardComponent {

  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  click(event: MouseEvent){
    this.clickEvent.emit(event);
  }

}
