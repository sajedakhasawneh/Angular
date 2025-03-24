import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

  voucherContainer: any;
  constructor(private _service: UrlService) { }

  ngOnInit() {
    this.getAllVouchers();

  }


  getAllVouchers() {
    this._service.getVoucher().subscribe((data) => {
      this.voucherContainer = data;
    })
  }
}
