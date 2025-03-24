import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private _http: HttpClient) { }

  getVoucher() {
    return this._http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }

  addVoucher(data:any) {
    return this._http.post<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher",data);
  }

  Voucheredit(id: any, data :any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data)
  }

  getVoucherByID(id :any) {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }
}
