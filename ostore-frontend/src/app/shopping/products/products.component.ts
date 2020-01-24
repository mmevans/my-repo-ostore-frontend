import { ShoppingCartService } from '../../shared/service-shopping-cart/shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/service-product/product.service';
import { AdminProduct } from '../../shared/models/app-admin-product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: AdminProduct[] = [];
  filteredProducts: AdminProduct[];
  category: string;
  cartObservable;
  subscription: Subscription;
  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    productService
      .getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter(
              product =>
                product.category.toLowerCase() === this.category.toLowerCase()
            )
          : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(
      cart => (this.cartObservable = cart)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
