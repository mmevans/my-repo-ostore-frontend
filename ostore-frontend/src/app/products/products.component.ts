import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ProductService } from '../service-product/product.service';
import { AdminProduct } from '../models/app-admin-product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: AdminProduct[] = [];
  filteredProducts: AdminProduct[];
  category: string;
  constructor(route: ActivatedRoute, productService: ProductService) {
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
}
