import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  updateContainer: any;
  voucherID: any;
  constructor(private _service: UrlService, private _active: ActivatedRoute) { }

  ngOnInit() {
    let voucher = this._active.snapshot.paramMap.get("id");
    this._service.getVoucherByID(voucher).subscribe((data) => {
      this.updateContainer = data;
    })
  }

  editVoucher(data: any) {
    this.voucherID = this._active.snapshot.paramMap.get("id");
    this._service.Voucheredit(this.voucherID,data).subscribe(() => {
      alert("Voucher Updated Successfully");
    })
  }

}
