import { AuthService } from './../service-auth/auth.service';
import { OrderService } from './../service-order/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../models/app-shopping-cart';
import { ShoppingCartService } from './../service-shopping-cart/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../models/app-order';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './check-out.component.html'
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;
  private subscriptions: Subscription[] = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    let cartObservable = this.shoppingCartService.getCart();
    this.subscriptions.push(
      (this.cartSubscription = cartObservable.subscribe(
        cart => (this.cart = cart)
      )),
      (this.userSubscription = this.authService.userObservable.subscribe(
        user => (this.userId = user.uid)
      ))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.placeOrder(order).then(reference => {
      this.shoppingCartService.clearCart();
      this.router.navigate(['/order-success', reference.key]);
    });
  }
}
