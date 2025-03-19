import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
//import { MatSelectModule } from '@angular/material/select';
//import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private service: MyServiceService) { }

  ngOnInit() { }


  postProductData(data: any) {
    data.id = Date.now();
    data.categoryId = this.categorySel;
    return this.service.postProduct(data).subscribe((data) => {
      alert("Product Added Successfully")
    })
  };

  category: any;
  getCategdata() {
    return this.service.getCategory().subscribe((data) => {
      this.category = data;
    })
  }


  categorySel:any
  selectedCategory(id:any) {
    this.categorySel = id;
  }







}
