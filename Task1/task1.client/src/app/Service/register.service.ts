import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  userRegister(data: any): Observable<any> {

    return this._http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }

  getAllUsers() {
    return this._http.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }


  getUser(data: any) {
    var Users = localStorage.getItem(data);
    return Users ? JSON.parse(Users) : null;
  }

  setUser(key: string, value:any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
