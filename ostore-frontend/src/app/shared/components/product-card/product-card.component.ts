import { ShoppingCart } from '../../../shared/models/app-shopping-cart';
import { ShoppingCartService } from '../../../shared/service-shopping-cart/shopping-cart.service';
import { AdminProduct } from '../../models/app-admin-product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') public product: AdminProduct;
  @Input('show-actions') public showActions = true;
  @Input('shopping-cart') public shoppingCart: ShoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
}
