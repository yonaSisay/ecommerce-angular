import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMER } from '../customer/customer.object';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
  customer = CUSTOMER;
  selectedCustomer = new Customer();
  newCustomer = new Customer();
  pushCustomer = new Customer();
   
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let customer of this.customer){
          if (customer.id == param['id'])
          { this.selectedCustomer = customer; }
        }

      }
      );
    }

    navigate(id:number){
      this.router.navigateByUrl('/updatec/edit/' + id);
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
