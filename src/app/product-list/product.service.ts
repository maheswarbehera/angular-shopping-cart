import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService { 

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://fakestoreapi.com/products/'

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.apiUrl + `${id}`);
  }

}

