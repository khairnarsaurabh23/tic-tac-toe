import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  //win message for the screen
  winMessage: string = '';
  isCross = false; //to rotate betn the players
  itemArray: string[] = new Array(9).fill('empty'); //to hold all values in tic-tac-toe

  constructor(private toastr: ToastrService) {}

  detectClick = (item:number) => {
    //detect the click from user

    //if game has winner send a toastr message to screen
    if(this.winMessage){
      return this.toastr.success(this.winMessage);
    }

    //if user clicks on unfilled block change its value
    //depending on player term
    if(this.itemArray[item] === 'empty'){
      this.itemArray[item] = this.isCross? 'cross' : 'circle';

      //change the in isCross
      this.isCross = !this.isCross;
    }else {
      //if user clicks on already filled block, send a info message
      return this.toastr.info('Already filled');
    }

    //check if game has winner?
    this.checkWinner();
  }

  checkWinner = () => {
    //  checking  winner of the game
    //winning logic for game
    if (
      //check ef first row has same symbols
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] 
    ) {
      //assign wimMessage a value of winner
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      //check in second row
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      //check in third row for winner
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      //check in first column
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      //check in second column
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      //check in third column
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      //check in forward tilted column
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      //check in backward tilted column
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      //winMessage
      this.winMessage = `${this.itemArray[2]} won`;
    }
  };

  //need optimazation
  reload = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  };
}
