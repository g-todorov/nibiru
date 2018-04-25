import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const furnitureItems = [
      {
        id: 1,
        name: 'Mr. Nice'
      },
      {
        id: 2,
        name: 'Mr. Not Nice'
      }
    ];

    const jewelleryItems = [
      {
        id: 1,
        name: 'Mr. Nice'
      },
      {
        id: 2,
        name: 'Mr. Not Nice'
      }
    ];

    return {
      'furnitureItems': furnitureItems,
      'jewelleryItems': jewelleryItems
    };
  }
}
