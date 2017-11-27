import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  itemsFirst: [any] = [ 
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

  itemsSecond: [any] = [ 
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

  itemsThird: [any] = [ 
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


  getItems(type: string): [any] {
    if (type === "first") {
      return this.itemsFirst
    }
    else if (type === "second") {
      return this.itemsFirst
    }
    else if (type === "third") {
      return this.itemsFirst
    }
  }

  getItem(name: string): any {
    return this.itemsFirst.find(item =>
      item.name === name
    )
  }

}
