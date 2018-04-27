import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class FurnitureService {
  itemsUrl = 'furnitureItems';
  sourceFurnitureItemsSubscription: Subscription;
  destroy: Subject<boolean> = new Subject();

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

  requestNearbyFurnitureItem(direction, currentId) {
    this.sourceFurnitureItemsSubscription = this.sourceFurnitureItems
      .takeUntil(this.destroy)
      .subscribe(items => {
        if (items) {
          this._getNextFurnitureItem(currentId, items);
        } else {
          this.requestFurnitureItems();
        }
      });
  }

  _getNextFurnitureItem(currentId, items) {
    this.destroy.next(true);

    const currentItemIndex = items.findIndex(item => item.id === currentId);

    if (items[currentItemIndex + 1]) {
      this.sourceFurnitureItem.next(items[currentItemIndex + 1]);
    } else {
      this.sourceFurnitureItem.next(items[0]);
    }
  }

  getPrevFurnitureItem(currentId, items) {
    this.destroy.next(true);

    const currentItemIndex = items.findIndex(item => item.id === currentId);

    if (items[currentItemIndex - 1]) {
      this.sourceFurnitureItem.next(items[currentItemIndex - 1]);
    } else {
      this.sourceFurnitureItem.next(items[items.length - 1]);
    }

  }

}
