import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/service-product/product.service';
import { AdminProduct } from '../../shared/models/app-admin-product';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html'
})
export class AdminProductsComponent implements OnDestroy {
  products: AdminProduct[];
  subscription: Subscription;
  filteredProducts: any[];

  constructor(private productService: ProductService) {
    this.subscription = this.productService
      .getAll()
      .subscribe(
        products => (this.filteredProducts = this.products = products)
      );
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
