import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() refNumber = new EventEmitter<{ incrementvalue: number }>();
  myInterval: any;
  incValue: number = 0;

  startIncrementing(): void {
    this.myInterval = setInterval(function () { this.incValue = this.incValue + 1; }, 1000);
    this.refNumber.emit({
      incrementvalue: this.incValue,
    });
  }

  stopIncrementing(): void {
    clearInterval(this.myInterval);
    this.incValue = 0;
    this.refNumber.emit({
      incrementvalue: this.incValue,
    });
  }
}
