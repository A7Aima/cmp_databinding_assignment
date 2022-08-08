import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalValue = new EventEmitter<number>();
  myInterval: any;
  incValue: number;
  constructor() {
    this.incValue = 0;
  }

  ngOnInit(): void {

  }

  startGame(): void {
    this.myInterval = setInterval(() => {
      this.incValue = this.incValue + 1;
      console.log(this.incValue);
      this.intervalValue.emit(this.incValue);
    }, 1000);

  }

  stopGame(): void {
    clearInterval(this.myInterval);
    this.incValue = 0;
    console.log(this.incValue);
    this.intervalValue.emit(this.incValue);
  }
}
