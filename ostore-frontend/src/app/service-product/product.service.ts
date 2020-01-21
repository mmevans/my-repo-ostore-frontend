import { documentToDomainObject } from './../document-to-domain-object/document-to-domain-object';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AdminProduct } from '../models/app-admin-product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<[AdminProduct]> {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(
        map(
          actions =>
            actions.map(product => documentToDomainObject(product)) as [
              AdminProduct
            ]
        )
      );
  }

  get(productId) {
    return this.db
      .object('/products/' + productId)
      .valueChanges() as Observable<AdminProduct>;
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
