import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private _ser: MyServiceService) { }

  ngOnInit() {

    this.get();
  }

  categoryContainer: any

  dataCategory: any

  get() {

    this._ser.getCategory().subscribe((data) => {

      this.dataCategory = data;
    })

  }

}
