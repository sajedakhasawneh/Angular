import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private service: MyServiceService) { }

  ngOnInit() {}

  postCategoryData(data:any) {
    return this.service.postCategory(data).subscribe((data) => {
      alert("Category Added Successfully");
    })
  }
}
