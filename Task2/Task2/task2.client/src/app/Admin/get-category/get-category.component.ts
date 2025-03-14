import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {

  constructor(private service: MyServiceService, private _route: Router) { }

  ngOnInit() {
    this.getCategoryData();
  }

  categoryData: any;
  getCategoryData() {
    return this.service.getCategory().subscribe((data) => {
      data = this.categoryData;
      this._route.navigate(['dashboard/addCategory'])
    })
  }
}
