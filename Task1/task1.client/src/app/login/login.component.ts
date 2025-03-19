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


  usersData: any
  getData(enteredUser: any) {
    this.service.getAllUsers().subscribe((data) => {
      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);

      if (user) {
        alert("login successfully")
        this._route.navigate(['/category'])
      } else {
        alert("Invalid Email or password ")
      }

    })
  }

}
