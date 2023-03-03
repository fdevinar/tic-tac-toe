import { Component } from '@angular/core';

const X = 1;
const O = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  blocks = [0,0,0,0,0,0,0,0,0]
  blockValue = {0: '', 1: "X", 2: "O"};
  currentPlayer = X;

  select(block,idx) {
    if (block != 0) {
      return;
    }
    if (this.currentPlayer === X) {
      this.blocks[idx] = X;
      this.currentPlayer = O;
    } else {
      this.blocks[idx] = O;
      this.currentPlayer = X;
    }
    this.checkWin();
  }

  checkWin() {
    let players = [X,O];

    let victoryConditions = {
      'topLine': [0,1,2],
      'midLine':  [3,4,5],
      'bottomLine':  [6,7,8],
      'firstColumn':  [0,3,6],
      'secondColumn':  [1,4,7],
      'thirdColumn':  [2,5,8],
      'diagonalLr':  [0,4,8],
      'diagonalRl':  [2,4,6]
    }   

    players.forEach((player)=> {
      for (const condition in victoryConditions) {
        this.checkCondition(player,...victoryConditions[condition]);        
      }
    })
  }

  checkCondition(player,...numbers) {
    let blk = this.blocks;
    let first = numbers[0], second = numbers[1], third = numbers[2];

    if (blk[first] === player && blk[second] === player && blk[third] === player) {
      player === 1 ? player="X" : player="O";
      alert(`${player} won the game!`);
      this.reset();
    }
  }

  reset() {
    this.blocks = [0,0,0,0,0,0,0,0,0];
    this.currentPlayer = X;
  }

}

