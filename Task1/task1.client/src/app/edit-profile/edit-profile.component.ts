import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() user: any; // Receive user data from parent
  @Output() save = new EventEmitter<any>(); // Emit updated data to parent
  @Output() cancel = new EventEmitter<void>(); // Notify parent to close popup

  editedUser: any;

  ngOnInit() {
    this.editedUser = { ...this.user }; // Clone user data for editing



  }

  saveChanges(form: any) {
    if (form.valid) {
      this.save.emit(this.editedUser);
    }
  }
}
