import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetaliesComponent } from './product-detalies/product-detalies.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NavBarComponent,
    ProductDetaliesComponent,
    GetCategoryComponent,
    GetProductComponent,
    AddProductComponent,
    AddCategoryComponent,
    DashBoardComponent,
    EditCategoryComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
