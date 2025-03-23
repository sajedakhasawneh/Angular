import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http: HttpClient) { }


  getCategory() {

    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }


  getProductsByCategoryId(): Observable<any> {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  postCategory(data:any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories",data)
  }

  postProduct(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products",data)

  }

  editCategory(id: any,data:any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`,data)
  }

  editProduct(id:any,data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data)
  }

  getCategoryByCategoryId(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }

  getProductById(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }
}
