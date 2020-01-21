import { Observable } from 'rxjs';
import { Category } from './../../models/app-category';
import { ProductService } from './../../service-product/product.service';
import { CategoryService } from './../../service-category/category.service';
import { Component } from '@angular/core';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  categoriesObservable: Observable<[Category]>;

  constructor(
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categoriesObservable = categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
  }
}
