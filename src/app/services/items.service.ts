import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  itemsFirst: [any] = [
    {
      name: 'test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      path: 'assets/images/1.jpg'
    },
    {
      name: 'test1',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ',
      path: 'assets/images/2.jpg'
    },
    {
      name: 'test2',
      description: 'test2',
      path: 'assets/images/3.jpg'
    },
    {
      name: 'test33333',
      description: 'test3',
      path: 'assets/images/4.jpg'
    },
    {
      name: 'test31111',
      description: 'test3',
      path: 'assets/images/5.jpg'
    },
    {
      name: 'test3222231',
      description: 'test3',
      path: 'assets/images/6.jpg'
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
    const allItems = this.itemsFirst.concat(this.itemsSecond, this.itemsThird);
    return allItems.find(item =>
      item.name === name
    );
  }

  getNextItem(section: string, currentItem: any): any {
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
