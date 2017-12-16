import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { SectionComponent } from './section/section.component';
import { FullscreenSliderComponent } from './fullscreen-slider/fullscreen-slider.component';

import { ItemsService } from './items.service';

const appRoutes: Routes = [
  { path: ':section', component: SectionComponent, data: { state: 'section' }},
  { path: ':section/:name', component: ItemDetailsComponent, data: { state: 'details' } },
  { path: ':section/:name/slider', component: FullscreenSliderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
