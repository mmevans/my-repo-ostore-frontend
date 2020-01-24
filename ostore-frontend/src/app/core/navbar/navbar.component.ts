import { ShoppingCartService } from '../../shared/service-shopping-cart/shopping-cart.service';
import { AppUser } from '../../shared/models/app-user';
import { AuthService } from '../../shared/service-auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../shared/models/app-shopping-cart';

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

  ngOnInit() {
    this.appUserObservable = this.auth.getUserObservable();
    this.cartObservable = this.shoppingCartService.getCart();
  }
}
