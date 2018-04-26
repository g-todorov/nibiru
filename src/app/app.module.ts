import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { ApiService } from './api-service/api.service';
import { ItemsService } from './services/items.service';
import { FurnitureService } from './services/furniture.service';
import { JewelleryService } from './services/jewellery.service';
import { MessageService } from './api-service/message-service.service';
import { InMemoryDataService } from './api-service/in-memory-data.service';
import { SectionComponent } from './section/section.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MouseParallaxDirective } from './directives/mouse-parallax.directive';
import { MainBackgroundComponent } from './components/main-background/main-background.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    SectionComponent,
    MainMenuComponent,
    Parallax,
    MouseParallaxDirective,
    MainBackgroundComponent,
    AboutPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    ApiService,
    ItemsService,
    FurnitureService,
    JewelleryService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
