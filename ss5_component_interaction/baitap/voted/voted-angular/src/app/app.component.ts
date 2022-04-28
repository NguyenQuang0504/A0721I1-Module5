import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:number;
  title = 'voted-angular';

  setData(value: number) {
    this.value = value;
  }

}
