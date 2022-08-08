import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalValue = new EventEmitter<number>();
  myInterval: any = null;
  incValue: number;
  lastValue: number;
  constructor() {
    this.incValue = 0;
    this.lastValue = 0;
  }

  ngOnInit(): void {

  }

  startGame(): void {
    if (this.myInterval === null) {
      this.incValue = this.lastValue;
      this.myInterval = setInterval(() => {
        this.incValue = this.incValue + 1;
        // console.log(this.incValue);
        this.intervalValue.emit(this.incValue);
      }, 1000);
    }

  }

  stopGame(): void {
    clearInterval(this.myInterval);
    this.myInterval = null
    this.incValue = 0;
    this.lastValue = 0;
    // console.log(this.incValue);
    this.intervalValue.emit(this.incValue);
  }
  pauseGame(): void {
    clearInterval(this.myInterval);
    this.myInterval = null
    this.lastValue = this.incValue;
    this.incValue = -1;
    // console.log(this.incValue);
    // this.intervalValue.emit(this.incValue);
  }
}
