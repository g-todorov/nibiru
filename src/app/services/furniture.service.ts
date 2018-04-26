import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class FurnitureService {
  itemsUrl = 'furnitureItems';

  private sourceFurnitureItems = new BehaviorSubject(null);
  furnitureItems = this.sourceFurnitureItems.asObservable();

  private sourceFurnitureItem = new BehaviorSubject(null);
  furnitureItem = this.sourceFurnitureItem.asObservable();

  constructor(private apiService: ApiService) { }

  requestFurnitureItems() {
    this.apiService.httpGetRequest(this.itemsUrl).subscribe(furnitureItems => {
      this.sourceFurnitureItems.next(furnitureItems);
    });
  }

  requestFurnitureItem(id) {
    this.apiService.httpGetRequest(`${this.itemsUrl}/${id}`).subscribe(furnitureItem => {
      this.sourceFurnitureItem.next(furnitureItem);
    });
  }

  requestNextFurnitureItem(currentId) {
    debugger
  }

}
