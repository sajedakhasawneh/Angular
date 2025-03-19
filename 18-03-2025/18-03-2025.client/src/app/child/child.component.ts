import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() userClicked = new EventEmitter<string>();

  sendMessage() {
    this.userClicked.emit('Button Clicked');
  }
}
