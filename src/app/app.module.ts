import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { FormComponent } from './form/form.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    EditProductComponent,
    HomeComponent,
    FormComponentComponent,
    UpdateProductComponent,
    CustomerDetailComponent,
    FormComponent,
    UpdateCustomerComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
