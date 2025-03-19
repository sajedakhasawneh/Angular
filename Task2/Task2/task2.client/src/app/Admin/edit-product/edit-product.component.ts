import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  constructor(private service: MyServiceService, private _active: ActivatedRoute) { }
  productContainer: any

  ngOnInit() {
    let product = this._active.snapshot.paramMap.get("id");
    this.service.getProductById(product).subscribe((data) => {

      this.productContainer = data
    })


  }
  categoryId: any

  updateProduct(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this.service.editProduct(this.categoryId, data).subscribe(() => {
      alert("update Successfully")
    })
  }
}
