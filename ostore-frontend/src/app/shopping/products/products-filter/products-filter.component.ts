import { CategoryService } from '../../../shared/service-category/category.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent {
  categoriesObservable;
  @Input('category') category;
  constructor(categoryService: CategoryService) {
    this.categoriesObservable = categoryService.getCategories();
  }
}
