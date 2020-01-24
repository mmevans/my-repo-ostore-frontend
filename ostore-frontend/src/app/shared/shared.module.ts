import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service-auth/auth.service';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { UserService } from './service-user/user.service';
import { CategoryService } from './service-category/category.service';
import { ProductService } from './service-product/product.service';
import { ShoppingCartService } from './service-shopping-cart/shopping-cart.service';
import { OrderService } from './service-order/order.service';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [ProductCardComponent, ProductQuantityComponent],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule {}
