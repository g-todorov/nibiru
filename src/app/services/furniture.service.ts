import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class FurnitureService {

  itemsUrl = 'jewelleryItems';

  private sourceFurnitureItems = new BehaviorSubject(null);
  shoppingItems = this.sourceFurnitureItems.asObservable();

  // private sourceShoppingItem = new BehaviorSubject(null);
  // shoppingItem = this.sourceShoppingItem.asObservable();

  constructor(private apiService: ApiService) { }

  requestFurnitureItems() {
    this.apiService.httpGetRequest(this.itemsUrl).subscribe(shoppingItems => {
      this.sourceFurnitureItems.next(shoppingItems);
    });
  }

  // requestShoppingItem(id) {
  //   this.apiService.httpGetRequest(`${this.itemsUrl}/${id}`).subscribe(shoppingItem => {
  //     this.sourceShoppingItem.next(shoppingItem);
  //   });
  // }

}
