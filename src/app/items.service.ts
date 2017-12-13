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
  ];

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
      name: 'test51',
      description: 'test51'
    },
    {
      name: 'test7',
      description: 'test5'
    }
  ];

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
  ];

  constructor() { }


  getItems(type: string): [any] {
    if (type === 'first') {
      return this.itemsFirst;
    } else if (type === 'second') {
      return this.itemsSecond;
    } else if (type === 'third') {
      return this.itemsThird;
    }
  }

  getItem(name: string): any {
    const allItems = this.itemsFirst.concat(this.itemsSecond, this.itemsThird)
    return allItems.find(item =>
      item.name === name
    );
  }

  getNextItem(section: string, currentItem: any): any {
    // let allItems = this.itemsFirst.concat(this.itemsSecond, this.itemsThird)
    const sectionItems = this.getItems(section);
    const currentItemIndex = sectionItems.findIndex(item => item.name === currentItem.name);
    let nextItem;
    if (sectionItems[currentItemIndex + 1]) {
      nextItem = sectionItems[currentItemIndex + 1];
    } else {
      nextItem = sectionItems[0];
    }
    return nextItem;
  }

  getPrevItem(section: string, currentItem: any): any {
    const sectionItems = this.getItems(section);
    const currentItemIndex = sectionItems.findIndex(item => item.name === currentItem.name);
    let prevItem;

    if (sectionItems[currentItemIndex - 1]) {
      prevItem = sectionItems[currentItemIndex - 1];
    } else {
      prevItem = sectionItems[sectionItems.length - 1];
    }
    return prevItem;
  }

}
