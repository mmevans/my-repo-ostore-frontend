import { AdminProduct } from '../models/app-admin-product';

export class ShoppingCartItem {
  constructor(public product: AdminProduct, public quantity: number) {}

  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
