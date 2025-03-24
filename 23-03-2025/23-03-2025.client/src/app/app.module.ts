import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoucherComponent } from './voucher/voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditVoucherComponent } from './edit-voucher/edit-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    AddVoucherComponent,
    NavbarComponent,
    EditVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
