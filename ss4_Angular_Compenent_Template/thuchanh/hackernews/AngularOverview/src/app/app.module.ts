import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
