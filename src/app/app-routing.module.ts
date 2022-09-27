import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { Customer } from './customer/customer.object';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
  {
    path:'customer/edit/:id',
    component:CustomerDetailComponent
  }
  ,
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'form' ,
    component:FormComponentComponent
  },
  {
    path:'form-cust' ,
    component:FormComponent
  }
  ,
  {
    path:'update/edit/:id' ,
    component:UpdateProductComponent
  }
  ,
  {
    path:'updatec/edit/:id' ,
    component:UpdateCustomerComponent
  }
  ,
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
