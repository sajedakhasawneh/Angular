import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detalies',
  templateUrl: './product-detalies.component.html',
  styleUrl: './product-detalies.component.css'
})
export class ProductDetaliesComponent {
  

  categoryId: any;
  dataProduct: any;
  selectedProduct: any = null; // Holds the selected product

  constructor(private _ser: MyServiceService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    if (!this.categoryId) return;

    this._ser.getProductsByCategoryId().subscribe((data) => {
      this.dataProduct = data.filter((x: any) => x.categoryId == this.categoryId);
    });
  }

  // Show product details when button is clicked
  showDetails(product: any) {
    this.selectedProduct = product;
  }

  // Close product details
  closeDetails() {
    this.selectedProduct = null;
  }
}

