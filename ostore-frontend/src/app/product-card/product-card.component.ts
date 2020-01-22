import { ShoppingCartService } from './../service-shopping-cart/shopping-cart.service';
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
  @Input('shopping-cart') shoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }
}
