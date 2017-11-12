import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  items: [any] = [ 
    {
      name: 'test',
      description: 'test'
    },
    {
      name: 'test1',
      description: 'test1'
    },
    {
      name: 'test2',
      description: 'test2'
    },
    {
      name: 'test3',
      description: 'test3'
    }
  ]

  constructor() { }


  getItems(): [any] {
    return this.items
  }

  getItem(name: string): any {
    return this.items.find(item =>
      item.name === name
    )
  }

}
