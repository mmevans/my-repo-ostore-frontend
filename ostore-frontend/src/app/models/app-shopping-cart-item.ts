import { AdminProduct } from 'src/app/models/app-admin-product';
export interface ShoppingCartItem {
  product: AdminProduct;
  quantity: number;
}
