import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { FurnitureService } from '../services/furniture.service';
import { JewelleryService } from '../services/jewellery.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.styl']
})
export class SectionComponent implements OnInit, OnDestroy {
  items: [any];
  furnitureServiceSubscription: Subscription;
  jewelleryServiceSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private jewelleryService: JewelleryService
  ) { }

  ngOnInit() {
    const routerSubscription = this.route.data.subscribe(data => {
      this.getItems(data.state);
    });

    this.furnitureServiceSubscription = this.furnitureService.furnitureItems.subscribe(furnitureItems => {
      this.items = furnitureItems;
    });

    this.jewelleryServiceSubscription = this.jewelleryService.jewelleryItems.subscribe(furnitureItems => {
      this.items = furnitureItems;
    });
  }

  ngOnDestroy() {
    this.furnitureServiceSubscription.unsubscribe();
    this.jewelleryServiceSubscription.unsubscribe();
  }

  getItems(section) {
    switch (section) {
      case 'furniture':
        this.furnitureService.requestFurnitureItems();
        break;

      case 'jewellery':
        this.jewelleryService.requestJewelleryItems();
        break;
    }
  }

}
