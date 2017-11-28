import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { SectionComponent } from './section/section.component';

import { ItemsService } from './items.service';

const appRoutes: Routes = [
  { path: ':section', component: SectionComponent },
  { path: 'item-details/:name', component: ItemDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
