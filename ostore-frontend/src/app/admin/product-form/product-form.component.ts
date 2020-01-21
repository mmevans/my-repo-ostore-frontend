import { Observable } from 'rxjs';
import { Category } from './../../models/app-category';
import { ProductService } from './../../service-product/product.service';
import { CategoryService } from './../../service-category/category.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  categoriesObservable: Observable<[Category]>;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {
    this.categoriesObservable = this.categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
