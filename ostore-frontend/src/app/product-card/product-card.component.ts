import { AdminProduct } from 'src/app/models/app-admin-product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: AdminProduct;
  @Input('show-actions') showActions = true;

  constructor() {}
}
