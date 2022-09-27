import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private route: Router) { }

  customers = CUSTOMER;
  ngOnInit(): void {
  }
  onViewDetail(id:number){
      this.route.navigateByUrl('/customer/edit/' + id);
  }
  navigate(){
    this.route.navigateByUrl('form-cust');
 }

 deleteCustomer(key:number){
  this.customers.forEach((value,index)=>{
    if(value.id==key){ 
      this.customers.splice(index,1);
    }
});
this.route.navigateByUrl('customer');
}

}
