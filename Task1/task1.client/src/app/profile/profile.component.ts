import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
//  user = { name: '', Email: '', age: '' };
//  loggedUser: any;
//  isEdit = false;
//  constructor(private service: RegisterService) { }

//  ngOnInit() {
//    const storedUser = this.service.getUser('userProfile');
//    if (storedUser) {
//      this.user = storedUser;
//    }
//  }

//  openEditModal() {
//    this.isEdit = true;
//  }

//  closeEditModal() {
//    this.isEdit = false;
//  }

//  updateProfile(updatedUser: any) {
//    this.user = updatedUser;
//    this.service.setUser('userProfile', this.user);
//    this.isEdit = false;
//  }
//}

  user = JSON.parse(localStorage.getItem('loggedUser') || '{}'); // Fetch logged user
  isEditing = false;

  openEditPopup() {
    this.isEditing = true;
  }

  saveUser(updatedUser: any) {
    this.user = updatedUser;
    localStorage.setItem('loggedUser', JSON.stringify(this.user)); // Update local storage
    this.isEditing = false;
  }

  closeEditPopup() {
    this.isEditing = false;
  }
}
