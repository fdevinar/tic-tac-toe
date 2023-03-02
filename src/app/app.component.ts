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
    // console.log("Block: :", block, " Index: ",idx);
    // this.blocks[idx] = 1;
    // console.log(this);

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

  }

  reset() {
    this.blocks = [0,0,0,0,0,0,0,0,0];
    this.currentPlayer = 1;
  }


}

