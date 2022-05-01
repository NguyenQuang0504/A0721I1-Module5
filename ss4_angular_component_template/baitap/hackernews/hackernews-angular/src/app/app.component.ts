import { Component } from '@angular/core';
import {IArticle} from "./list/IArticle";
import {ArticleDao} from "./list/ArticleDao";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackernews-angular';

}
