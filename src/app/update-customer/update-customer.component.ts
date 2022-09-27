import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMER } from '../customer/customer.object';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
  customer = CUSTOMER;
  selectedCustomer = new Customer();
  newCustomer = new Customer();
  
   
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.customer){
          if (product.id == param['id'])
          { this.selectedCustomer = product; }
        }

      }
      );
    }
   
    
    
    updateCustomer(){
      this.selectedCustomer.name = this.newCustomer.name;
      this.selectedCustomer.Phone = this.newCustomer.Phone;
      this.selectedCustomer.img = this.newCustomer.img;
      this.selectedCustomer.email = this.newCustomer.email;
      this.newCustomer = new Customer();
      this.router.navigateByUrl('customer');
    }

    
    
    
    


}
