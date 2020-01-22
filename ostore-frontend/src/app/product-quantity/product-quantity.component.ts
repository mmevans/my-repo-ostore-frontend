import { Component, Input } from '@angular/core';
import { AdminProduct } from '../models/app-admin-product';
import { ShoppingCartService } from '../service-shopping-cart/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html'
})
export class ProductQuantityComponent {
  @Input('product') product: AdminProduct;
  @Input('shopping-cart') shoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }
}
