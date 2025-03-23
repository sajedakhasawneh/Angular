import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private reg: RegisterService, private _route: Router) {
  }

  ngOnInit() { }

  addUser(data: any) {

    this.reg.userRegister(data).subscribe(() => {
      alert("add new user");
      this._route.navigate(['/Login'])
    })

  }
  }

