import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private _ser: MyServiceService, private _active: ActivatedRoute) { } // inject to service 

  ngOnInit() {
    this.get()
  }

  categoryId: any;
  dataProduct: any

  //get() {
  //  this.categoryId = this._active.snapshot.paramMap.get("id");

  //  this._ser.getProductsByCategoryId().subscribe((data) => {
  //    this.dataProduct = data.filter((x: any) => x.categoryId == this.categoryId);
  //  })
  //}

  selectedProduct: any = null; // Holds selected product details
  get() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._ser.getProductsByCategoryId().subscribe((data) => {
      this.dataProduct = data.filter((x: any) => x.categoryId == this.categoryId);
    });
  }

  // Show selected product details
  showDetails(productId: number) {
    this.selectedProduct = this.dataProduct.find((item: any) => item.id === productId);
  }

  // Close details
  //closeDetails() {
  //  this.selectedProduct = null;
  //}

}
