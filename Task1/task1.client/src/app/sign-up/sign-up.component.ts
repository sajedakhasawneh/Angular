import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private register: RegisterService) {
  }

  ngOnInit() { }

  Data: any;
  onSubmit(data: any) {
    this.register.Register(this.Data).subscribe((result) => {
      alert("register successfully")
      })
    }
  }

