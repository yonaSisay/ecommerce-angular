import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private router: Router) { }
  product = PRODUCTS;
  selectedProduct = new Product();
  pushProduct = new Product();

  ngOnInit(): void {
  }

  addProduct(){
    this.pushProduct.id = this.product.length + 1;
    this.product.push(this.pushProduct);
    this.pushProduct = new Product();
    this.router.navigateByUrl('product');
}

}
