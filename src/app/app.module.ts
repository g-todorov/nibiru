import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ItemsService } from './items.service';
import { SectionServiceComponent } from './section-service/section-service.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    ItemDetailsComponent,
    SectionServiceComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
