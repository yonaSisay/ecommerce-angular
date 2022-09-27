import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpRequest: HttpClient) { }

  getCustomers():  Observable<any>{
    return this.httpRequest.get('https://622b107514ccb950d22dc35b.mockapi.io/Customer');
}
}
