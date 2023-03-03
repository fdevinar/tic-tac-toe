import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  blocks = [0,0,0,0,0,0,0,0,0]
  blockValue = {0: '', 1: "X", 2: "O"};
  currentPlayer = 1;

  select(block,idx) {

    if (block != 0) {
      return;
    }
    if (this.currentPlayer === 1) {
      this.blocks[idx] = 1;
      this.currentPlayer = 2;
    } else {
      this.blocks[idx] = 2;
      this.currentPlayer = 1;
    }

    this.checkWin();

  }

  checkWin() {
    let blk = this.blocks;

    // Victory conditions

    // top line 0 1 2
    this.checkCondition(1,0,1,2);
    this.checkCondition(2,0,1,2);
    // mid line 3 4 5
    this.checkCondition(1,3,4,5);
    this.checkCondition(2,3,4,5);
    // bottom line 6 7 8
    this.checkCondition(1,6,7,8);
    this.checkCondition(2,6,7,8);

    // first column 0 3 6
    this.checkCondition(1,0,3,6);
    this.checkCondition(2,0,3,6);
    // second column 1 4 7
    this.checkCondition(1,1,4,7);
    this.checkCondition(2,1,4,7);
    // third column 2 5 8
    this.checkCondition(1,2,5,8);
    this.checkCondition(2,2,5,8);

    // diagonal LR 0 4 8
    this.checkCondition(1,0,4,8);
    this.checkCondition(2,0,4,8);
    // diagonal RL 2 4 6
    this.checkCondition(1,2,4,6);
    this.checkCondition(2,2,4,6);

  }

  checkCondition(player,first,second,third) {
    let blk = this.blocks;
    if (blk[first] === player && blk[second] === player && blk[third] === player) {
      player === 1 ? player="X" : player="O";
      alert(`${player} won the game!`);
    }

  }

  reset() {
    this.blocks = [0,0,0,0,0,0,0,0,0];
    this.currentPlayer = 1;
  }


}

