import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackernewsAngularsComponent } from './hackernews-angulars/hackernews-angulars.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RoutersModule} from "./routers.module";
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsAngularsComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
