import { Component, OnInit } from '@angular/core';
import { Product,PRODUCTS } from './product.object';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = PRODUCTS;
  pushProduct = new Product();
  constructor(private router: Router) { }

 
  ngOnInit(): void {
 
  }
  onViewDetails(id:number){
  this.router.navigateByUrl('/product/edit/' + id);
 }
 navigate(){
    this.router.navigateByUrl('form');
 }
 deleteProduct(key:number){
  this.products.forEach((value,index)=>{
    if(value.id==key){ 
      this.products.splice(index,1);
    }
});
this.router.navigateByUrl('product');
}


}


