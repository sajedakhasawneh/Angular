import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  clickedUser = '';

  handleUserClick(event: string) {
    this.clickedUser = event;
  }
}
