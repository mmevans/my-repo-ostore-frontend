import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/service-order/order.service';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html'
})
export class AdminOrdersComponent {
  ordersObservable;

  constructor(private orderService: OrderService) {
    this.ordersObservable = this.orderService.getOrders();
    console.log(this.ordersObservable);
  }
}
