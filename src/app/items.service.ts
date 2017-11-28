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
      name: 'test4',
      description: 'test4'
    },
    {
      name: 'test5',
      description: 'test5'
    },
    {
      name: 'test5',
      description: 'test5'
    },
    {
      name: 'test7',
      description: 'test5'
    }
  ]

  itemsThird: [any] = [
    {
      name: 'test8',
      description: 'test8'
    },
    {
      name: 'test9',
      description: 'test9'
    },
    {
      name: 'test10',
      description: 'test10'
    },
    {
      name: 'test11',
      description: 'test11'
    }
  ]

  constructor() { }


  getItems(type: string): [any] {
    if (type === "first") {
      return this.itemsFirst
    }
    else if (type === "second") {
      return this.itemsSecond
    }
    else if (type === "third") {
      return this.itemsThird
    }
  }

  getItem(name: string): any {
    let allItems = this.itemsFirst.concat(this.itemsSecond, this.itemsThird)
    return allItems.find(item =>
      item.name === name
    )
  }

}
