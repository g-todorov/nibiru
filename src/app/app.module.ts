import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ItemsService } from './items.service';
import { SectionComponent } from './section/section.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MouseParallaxDirective } from './directives/mouse-parallax.directive';
import { MainBackgroundComponent } from './components/main-background/main-background.component';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    SectionComponent,
    MainMenuComponent,
    Parallax,
    MouseParallaxDirective,
    MainBackgroundComponent,
    AboutPageComponent
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
