import { Observable } from 'rxjs';
import { Category } from './../models/app-category';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db
      .list('/categories', ref => {
        const sortByName = ref.orderByChild('name');
        return sortByName;
      })
<<<<<<< HEAD
      .valueChanges() as Observable<[Category]>;
=======
      .valueChanges() as Observable<[AppCategory]>;
>>>>>>> e8e8986... Update category.service.ts
  }
}
