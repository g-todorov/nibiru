import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.styl']
})
export class FirstSectionComponent implements OnInit {
  firstSectionItems: [any];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.firstSectionItems = this.itemsService.getItems()
  }

}
