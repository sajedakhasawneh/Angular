import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {

  constructor(private _service: UrlService) { }

  ngOnInit() { }

  addNewVoucher(formData:any) {
    this._service.addVoucher(formData).subscribe(() => {
      alert("Voucher Added Successfully");
    })
  }
}
