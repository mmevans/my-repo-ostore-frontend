import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { OrderService } from '../service-order/order.service';
import { AuthService } from '../service-auth/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html'
})
export class MyOrdersComponent {
  ordersObservable: Observable<User>;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.ordersObservable = this.authService.userObservable.pipe(
      map(user => {
        this.orderService.getOrdersByUser(user.uid);

        return user;
      })
    );
  }
}
// this.orderService.getOrdersByUser(user.uid)
