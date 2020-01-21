import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service-product/product.service';
import { AdminProduct } from 'src/app/models/app-admin-product';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html'
})
export class AdminProductsComponent {
  productObservable;

  constructor(private productService: ProductService) {
    this.productObservable = this.productService.getAll();
  }
}
