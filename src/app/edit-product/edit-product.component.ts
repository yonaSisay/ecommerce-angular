import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
  product = PRODUCTS;
  selectedProduct = new Product();
  newProduct = new Product();
  pushProduct = new Product();
   
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.product){
          if (product.id == param['id'])
          { this.selectedProduct = product; }
        }

      }
      );
    }

    navigate(id:number){
      this.router.navigateByUrl('/update/edit/' + id);
    }
    
    updateProduct(){
      this.selectedProduct.title = this.newProduct.title;
      this.selectedProduct.price = this.newProduct.price;
      this.selectedProduct.img = this.newProduct.img;
      this.selectedProduct.ProductDes = this.newProduct.ProductDes;
      this.newProduct = new Product();
      this.router.navigateByUrl('product');
    }

    
    
    
    

  

}

 


