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

const myRoutes : Routes = [
  {
    path:"add",component:AddProductComponent
  },
  {
    path:"viewall",component:ViewallProductsComponent
  },
  {
    path:"search",component:SearchComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewallProductsComponent,
    NavbarComponent,
    SearchComponent
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
