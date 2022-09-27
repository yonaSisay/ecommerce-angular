import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product.object';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpRequest: HttpClient) { }

  getProducts():  Observable<any>{
    return this.httpRequest.get('https://622b107514ccb950d22dc35b.mockapi.io/Product');
}
postProducts(product: Product): Observable<any>{
  return this.httpRequest.get('https://622b107514ccb950d22dc35b.mockapi.io/Product');
}
updateProduct(id: number, product: Product): Observable<any>{
  return this.httpRequest.put('https://61cda2a97067f600179c5b5d.mockapi.io/products/' + id, 
   product)
}



}
