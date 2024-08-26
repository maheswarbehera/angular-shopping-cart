import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart//cart.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule,],
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  quantity: { [id: number]: number } = {};

  constructor(private cartService: CartService,
    private  productService: ProductService
  ) {}
  ngOnInit(): void {
    // initialization logic goes here
    
    console.log('Component initialized!');
    this.productService.getProducts().subscribe((res) => {
      this.products = res; 
      // console.log('Response', this.products );
    }); 
  }
  addToCart(product: Product) {
    const qty = this.quantity[product.id] || 1; // Default to 1 if no quantity specified
    this.cartService.addToCart(product, qty);
    this.quantity[product.id] = 1; 
  }
}
