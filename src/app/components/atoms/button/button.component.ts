import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() buttonIconClass: string = "";
  @Input() buttonType: string = "";
  @Input() isDisabled: boolean = false;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  click(event: MouseEvent){
    this.clickEvent.emit(event);
  }

}
