import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { SectionComponent } from './section/section.component';
import { AboutPageComponent } from './about-page/about-page.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent, data: { state: 'about' }},
  { path: 'furniture', component: SectionComponent, data: { state: 'furniture' }},
  { path: 'jewellery', component: SectionComponent, data: { state: 'jewellery' }},
  { path: ':section/:name', component: ItemDetailsComponent, data: { state: 'details' }},
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
