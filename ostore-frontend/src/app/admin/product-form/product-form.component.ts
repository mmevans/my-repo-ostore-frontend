import { Observable } from 'rxjs';
import { Category } from './../../models/app-category';
import { ProductService } from './../../service-product/product.service';
import { CategoryService } from './../../service-category/category.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminProduct } from 'src/app/models/app-admin-product';
import { take } from 'rxjs/operators';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  categoriesObservable: Observable<[Category]>;
  product = {};
  id: String;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoriesObservable = this.categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService
        .get(this.id)
        .subscribe(product => (this.product = product));
  }

  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
