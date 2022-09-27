import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CUSTOMER } from '../customer/customer.object';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }
  customer = CUSTOMER;
  selectedCustomer = new Customer();
  pushCustomer = new Customer();

  ngOnInit(): void {
  }

  addCustomer(){
    this.pushCustomer.id = this.customer.length + 1;
    this.customer.push(this.pushCustomer);
    this.pushCustomer = new Customer();
    this.router.navigateByUrl('customer');
}
}
