import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {

  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.getProduct();
  }

  productData: any;
  getProduct() {
    return this.service.getProductsByCategoryId().subscribe((data) => {
      this.productData = data;
    })
  }
}
