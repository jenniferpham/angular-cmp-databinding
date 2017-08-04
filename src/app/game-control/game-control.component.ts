import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() displayTimer: EventEmitter<number> = new EventEmitter(); 
  timer: number;
  gameTimer: any;

  constructor() { }

  ngOnInit() {
    this.timer = 0;
  }

  startGame(){
    this.gameTimer = setInterval( ()=>{
      this.timer++;
      this.displayTimer.emit(this.timer);
    }, 1000);
  }

  stopGame(){
    clearInterval(this.gameTimer);
  }

}
