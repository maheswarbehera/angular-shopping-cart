import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, ],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}
