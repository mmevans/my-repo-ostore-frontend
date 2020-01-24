import { ShoppingCart } from '../../shared/models/app-shopping-cart';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html'
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart;
}
