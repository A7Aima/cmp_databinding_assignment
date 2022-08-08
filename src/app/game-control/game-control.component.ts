import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalValue = new EventEmitter<number>();
  myInterval: any = null;
  valuePassing: number;
  constructor() {
    this.valuePassing = 0;
  }

  ngOnInit(): void {

  }

  startGame(): void {
    if (this.myInterval == null) {
      this.myInterval = setInterval(() => {
        this.valuePassing = Math.floor(Math.random() * 100);
        console.log(this.valuePassing);
        this.intervalValue.emit(this.valuePassing);
      }, 500);
    }

  }

  stopGame(): void {
    clearInterval(this.myInterval);
    this.myInterval = null;
    this.valuePassing = 0;
    console.log(this.valuePassing);
    this.intervalValue.emit(this.valuePassing);
  }

  pauseGame(): void {
    clearInterval(this.myInterval);
    this.myInterval = null;
    this.valuePassing = -1;
    console.log(this.valuePassing);
    // this.intervalValue.emit(this.valuePassing);
  }
}
