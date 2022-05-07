import { Component, OnInit } from '@angular/core';
import {IDictionary} from "../IDictionary";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionary: IDictionary[] = this._dictionary.dictionary;
  constructor(
    private _dictionary: DictionaryServiceService
  ) { }

  ngOnInit(): void {

  }

}
