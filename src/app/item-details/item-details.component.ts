import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { FurnitureService } from '../services/furniture.service';
import { JewelleryService } from '../services/jewellery.service';

import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.styl'],
})
export class ItemDetailsComponent implements OnInit {
  item: {};
  currentSection: string;
  nextItem: any;
  prevItem: any;
  furnitureServiceSubscription: Subscription;
  jewelleryServiceSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private furnitureService: FurnitureService,
    private jewelleryService: JewelleryService,
    private location: Location) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      this.currentSection = params.section;
      // this.item = this.itemsService.getItem(params.name);
      this.getItem(params.section, params.id);
    });

    this.furnitureServiceSubscription = this.furnitureService.furnitureItem.subscribe(furnitureItem => {
      this.item = furnitureItem;
    });

    this.jewelleryServiceSubscription = this.jewelleryService.jewelleryItem.subscribe(furnitureItem => {
      this.item = furnitureItem;
    });
  }

  getItem(section, id) {
    switch (section) {
      case 'furniture':
        this.furnitureService.requestFurnitureItem(id);
        break;

      case 'jewellery':
        this.jewelleryService.requestShoppingItem(id);
        break;
    }
  }

  goBack() {
    // TODO Eventually will have to keep scroll postion of the previous page
    this.router.navigate(['/' + this.currentSection]);
  }

  goToNextItem() {
    this.furnitureService.requestNextFurnitureItem('test');
    // this.nextItem = this.itemsService.getNextItem(this.currentSection, this.item);
    // this.router.navigate(['/' + this.currentSection + '/' + this.nextItem.name]);
  }

  goToPreviousItem() {
    this.prevItem = this.itemsService.getPrevItem(this.currentSection, this.item);
    this.router.navigate(['/' + this.currentSection + '/' + this.prevItem.name]);
  }

  onKeydown(event) {
    // MOVE THIS INTO DIRECTIVE
    if (event.key === 'ArrowRight') {
      this.goToNextItem();
    } else if (event.key === 'ArrowLeft') {
      this.goToPreviousItem();
    }
  }

}
