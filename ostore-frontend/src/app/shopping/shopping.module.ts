import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './checkout/check-out.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { AuthGuard } from '../shared/auth-guard/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: 'order-success/:id',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] }
];
@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    ProductsComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsFilterComponent,
    ShoppingCartSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
    CommonModule,
    SharedModule
  ]
})
export class ShoppingModule {}
