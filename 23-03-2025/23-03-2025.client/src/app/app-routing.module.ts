import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './voucher/voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { EditVoucherComponent } from './edit-voucher/edit-voucher.component';

const routes: Routes = [
  { path: "getVoucher", component: VoucherComponent },
  { path: "AddVoucher", component: AddVoucherComponent },
  { path: "editvoucher/:id", component: EditVoucherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
