import { Component, OnInit } from '@angular/core';
import {IArticle} from "./IArticle";
import {ArticleDao} from "./ArticleDao";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // article: IArticle = {
  //   title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  //   url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  // };
  articles:IArticle[] = ArticleDao.articles;
  constructor() { }

  ngOnInit(): void {
  }

}
