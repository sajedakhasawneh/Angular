import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message = 'Hello World, From Child';
  @Output() newMessage = new EventEmitter<string>();


  showMessage(newMsg: string) {
    this.newMessage.emit(newMsg);
  }
}
