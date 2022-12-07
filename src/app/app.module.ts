import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewallProductsComponent } from './viewall-products/viewall-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserViewallComponent } from './user-viewall/user-viewall.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';

const myRoutes : Routes = [
  {
     path:"",component:AdminLoginComponent
  },
  {
    path:"add",component:AddProductComponent
  },
  {
    path:"viewall",component:ViewallProductsComponent
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"userlogin",component:UserLoginComponent
  },
  {
    path:"register",component:UserRegistrationComponent
  },
  {
    path:"userviewall",component:UserViewallComponent
  },
  {
    path:"usersearch",component:UserSearchComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewallProductsComponent,
    NavbarComponent,
    SearchComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserViewallComponent,
    UserSearchComponent,
    UsernavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
