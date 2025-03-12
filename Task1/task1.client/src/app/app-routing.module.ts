import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "SingUp", component: SignUpComponent },
  { path: "category", component: CategoryComponent },
  { path: "product", component:ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
