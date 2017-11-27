import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ItemsService } from './items.service';

const appRoutes: Routes = [
  { path: 'first', component: FirstSectionComponent },
  { path: 'second', component: SecondSectionComponent },
  { path: 'third', component: ThirdSectionComponent },
  { path: 'item-details/:name', component: ItemDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}