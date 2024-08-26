import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  addToCart(product: Product, quantity: number) {
    
    const existingItem = this.cart.find(item => item.product.id === product.id);
    console.log(product.id);
    if (existingItem) {         
        existingItem.quantity += quantity;      
    } else {
      this.cart.push({ product, quantity }); 
    }
    // this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }
 
  getTotal() {  
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}
