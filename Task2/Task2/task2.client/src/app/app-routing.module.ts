import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetaliesComponent } from './product-detalies/product-detalies.component';
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

const routes: Routes = [
  { path: "category", component: CategoryComponent },
  { path: "product", component: ProductComponent },
  { path: "product/:id", component: ProductComponent },
  //{ path: "product/:id", component: ProductDetaliesComponent },
  {
    path: "dashboard", component: DashBoardComponent, children: [
      { path: "getCategory", component: GetCategoryComponent },
      { path: "getProduct", component: GetProductComponent },
      { path: "addCategory", component: AddCategoryComponent },
      { path: "addProduct", component: AddProductComponent }
  ] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
