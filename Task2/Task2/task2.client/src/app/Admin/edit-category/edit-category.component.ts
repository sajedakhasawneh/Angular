import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  constructor(private service: MyServiceService, private _active: ActivatedRoute) { }
  categoryContainer: any

  ngOnInit() {
    let category = this._active.snapshot.paramMap.get("id");
    this.service.getCategoryByCategoryId(category).subscribe((data) => {

      this.categoryContainer = data
    })


  }
  categoryId: any

  updateCategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this.service.editCategory(this.categoryId, data).subscribe(() => {
      alert("update Successfully")
    })
  }
}
