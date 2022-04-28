import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:boolean;
  title = 'countdown-angular';

  getData(data: boolean) {
    this.value = data;
  }
}
