import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../service-shopping-cart/shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref =>
      ref.orderByChild('userId').equalTo('place')
    );
  }
}
