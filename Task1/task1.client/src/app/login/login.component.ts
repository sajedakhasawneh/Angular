import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: RegisterService, private _route: Router) { }

  ngOnInit() { }




  getData(enteredUser: any) {
    this.service.getAllUsers().subscribe((data) => {
      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);
      if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        alert("login successfully")
        this._route.navigate(['/profile'])
      } else {
        alert("Invalid Email or password ")
      }

    })
  }

}
