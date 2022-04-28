import { Component, OnInit } from '@angular/core';
import {IArticle} from "../list/IArticle";
import {ArticleDao} from "../list/ArticleDao";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  article:IArticle = {};
  constructor() { }

  ngOnInit(): void {
  }
}
