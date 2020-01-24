import { ShoppingCart } from './../models/app-shopping-cart';
import { take } from 'rxjs/operators';
import { AdminProduct } from 'src/app/models/app-admin-product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  itemObservable;
  constructor(private db: AngularFireDatabase) {}

  create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db
      .object('/shopping-carts/' + cartId)
      .valueChanges()
      .pipe(map((cart: any) => new ShoppingCart(cart.items)));
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  addToCart(product: AdminProduct) {
    this.updateItemQuantity(product, 1);
  }

  removeFromCart(product: AdminProduct) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: AdminProduct, change: number) {
    let cartId = await this.getOrCreateCartId();
    this.itemObservable = this.getItem(cartId, product.key);
    this.itemObservable
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        this.itemObservable.update({
          product: product,
          quantity:
            (item.payload.val() && item.payload.val().quantity
              ? item.payload.val().quantity
              : 0) + change
        });
      });
  }
}
