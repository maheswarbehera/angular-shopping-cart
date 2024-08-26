import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true,
  imports: [CommonModule, ],
})
export class ProductItemComponent {
  @Input() product!: Product;
}
