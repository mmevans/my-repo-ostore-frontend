import { ShoppingCartService } from '../../shared/service-shopping-cart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartObservable;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartObservable = this.shoppingCartService.getCart();
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
}
