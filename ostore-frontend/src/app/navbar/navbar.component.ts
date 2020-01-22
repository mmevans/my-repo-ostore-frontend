import { ShoppingCartService } from './../service-shopping-cart/shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../service-auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/app-shopping-cart';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  appUserObservable: Observable<AppUser>;
  cartObservable: Observable<ShoppingCart>;
  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.appUserObservable = this.auth.getUserObservable();
    this.cartObservable = await await this.shoppingCartService.getCart();
  }
}
