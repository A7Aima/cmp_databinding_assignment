import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNoList: number[] = [];
  evenNoList: number[] = [];

  constructor() {
  }

  onFiredInterval(value: number) {
    if (value !== 0) {
      if (value % 2 == 0) {
        this.evenNoList.push(value);
      } else {
        this.oddNoList.push(value);
      }
    } else {
      this.oddNoList = [];
      this.evenNoList = [];
    }
  }
}
