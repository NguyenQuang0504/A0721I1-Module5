import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";
import {IDictionary} from "../IDictionary";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary:IDictionary | undefined;
  constructor(
    private _router:Router,
    private _activatedRouter: ActivatedRoute,
    private _dictionary: DictionaryServiceService
  ) { }

  ngOnInit(): void {
    let eng:string = this._activatedRouter.snapshot.params['eng'];
    this.dictionary = this._dictionary.findByEng(eng);
  }

  return() {
    this._router.navigateByUrl('/');
  }
}
