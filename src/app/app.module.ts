import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HGiphyComponent } from './hgiphy/hgiphy.component';
import { HomePageComponent } from './hgiphy/views/home-page/home-page.component';
import { HomePageViewService} from "./hgiphy/views/home-page/home-page.service"
import { HomePageBackendService} from "./hgiphy/views/home-page/home-page-backend.service"
import { HttpClientModule } from '@angular/common/http';
import { GiphItemComponent } from './hgiphy/views/home-page/giph-item/giph-item.component';
import {HGiphyService} from "./hgiphy/hgiphy.service"
import { RouterModule } from '@angular/router';
import { AppRoutingModule} from './appRouting.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HGiphyComponent,
    HomePageComponent,
    GiphItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [HomePageViewService,
              HomePageBackendService,
              HGiphyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
