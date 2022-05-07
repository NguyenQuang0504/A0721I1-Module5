import { Injectable } from '@angular/core';
import {IDictionary} from "./IDictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  constructor() { }
  private _dictionary: IDictionary[] = [
    {eng: "Book", vni: "Sách"},
    {eng: "Student", vni: "Học sinh"},
    {eng: "Teacher", vni: "Giáo viên"},
    {eng: "Man", vni: "Đàn ông"},
    {eng: "Computer", vni: "Máy tính"},
    {eng: "Dog", vni: "Con chó"},
    {eng: "Cat", vni: "Con mèo"},
    ]

  get dictionary(): IDictionary[] {
    return this._dictionary;
  }

  set dictionary(value: IDictionary[]) {
    this._dictionary = value;
  }

  findByEng(eng: string) {
    for (let i:number = 0;i<this.dictionary.length;i++){
      if (this.dictionary[i].eng === eng){
        return this.dictionary[i];
      }
    }
    return undefined;
  }
}
