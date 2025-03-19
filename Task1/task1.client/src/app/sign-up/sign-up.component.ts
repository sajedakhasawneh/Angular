import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private register: RegisterService, private _route: Router) {
  }

  ngOnInit() { }


  onSubmit(data: any) {
    this.register.Register(data).subscribe(() => {
      alert("register successfully");
      this._route.navigate(['/Login'])
      })
    }
  }

