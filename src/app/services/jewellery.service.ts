import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../api-service/api.service';

@Injectable()
export class JewelleryService {
  itemsUrl = 'jewelleryItems';

  private sourceJewelleryItems = new BehaviorSubject(null);
  jewelleryItems = this.sourceJewelleryItems.asObservable();

  private sourceJewelleryItem = new BehaviorSubject(null);
  jewelleryItem = this.sourceJewelleryItem.asObservable();

  constructor(private apiService: ApiService) { }

  requestJewelleryItems() {
    this.apiService.httpGetRequest(this.itemsUrl).subscribe(jewelleryItems => {
      this.sourceJewelleryItems.next(jewelleryItems);
    });
  }

  requestShoppingItem(id) {
    this.apiService.httpGetRequest(`${this.itemsUrl}/${id}`).subscribe(jewelleryItem => {
      this.sourceJewelleryItem.next(jewelleryItem);
    });
  }
}
