import { Component, Input } from '@angular/core';
import { AdminProduct } from '../../../shared/models/app-admin-product';
import { ShoppingCartService } from '../../../shared/service-shopping-cart/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html'
})
export class ProductQuantityComponent {
  @Input('product') public product: AdminProduct;
  @Input('shopping-cart') public shoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }
}
