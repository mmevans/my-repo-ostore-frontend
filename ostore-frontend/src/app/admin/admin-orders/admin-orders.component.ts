import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/app-order';
import { OrderService } from 'src/app/service-order/order.service';

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
