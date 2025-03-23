import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  msgs = ['Msg1', 'Msg2', 'Msg3', 'item4'];

  addMessage(newMsg: string) {
    this.msgs.push(newMsg);
  }
}
