import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const furnitureItems = [
      {
        name: 'test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        path: 'assets/images/1.jpg',
        id: 1
      },
      {
        name: 'test1',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ',
        path: 'assets/images/2.jpg',
        id: 2
      },
      {
        name: 'test2',
        description: 'test2',
        path: 'assets/images/3.jpg',
        id: 3
      },
      {
        name: 'test33333',
        description: 'test3',
        path: 'assets/images/4.jpg',
        id: 4
      },
      {
        name: 'test31111',
        description: 'test3',
        path: 'assets/images/5.jpg',
        id: 5
      },
      {
        name: 'test3222231',
        description: 'test3',
        path: 'assets/images/6.jpg',
        id: 6
      }
    ];

    const jewelleryItems = [
      {
        name: 'test4',
        description: 'test4',
        path: 'assets/images/3.jpg',
        id: 1
      },
      {
        name: 'test5',
        description: 'test5',
        path: 'assets/images/3.jpg',
        id: 2
      },
      {
        name: 'test51',
        description: 'test51',
        path: 'assets/images/3.jpg',
        id: 3
      },
      {
        name: 'test7',
        description: 'test5',
        path: 'assets/images/5.jpg',
        id: 4
      }
    ];

    return {
      'furnitureItems': furnitureItems,
      'jewelleryItems': jewelleryItems
    };
  }
}
