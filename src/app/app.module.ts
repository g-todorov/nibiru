import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
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
  declarations: [
    AppComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
