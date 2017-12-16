import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ItemsService } from './items.service';
import { SectionComponent } from './section/section.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { FullscreenSliderComponent } from './fullscreen-slider/fullscreen-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    SectionComponent,
    HamburgerMenuComponent,
    FullscreenSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
