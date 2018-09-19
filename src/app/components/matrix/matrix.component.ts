import { Component } from '@angular/core';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent {
  public rowArray: number[] = [0,1,2];
  public columnArray: number[] = [0,1,2];
  //Initialize the array of cell matrix for the game
  public gameBoard = Array(9).fill(null);
  //The current player is defaulted to 'X'
  public currentPlayer: string = 'X';
  public winningPlayer: string = null;

  get Status() {
    // Return status message about the next turn or winning player based on whether we have a winner or not
    return this.winningPlayer ? `Player ${this.winningPlayer} has won!` :
      `Player ${this.currentPlayer}'s turn`;
  }

  Play(currentCell: number) {
    //When user clics on a cell compute the next player of declare the winner if any
    if (!this.winningPlayer && !this.gameBoard[currentCell]) {
      this.gameBoard[currentCell] = this.currentPlayer;
      if (this.HasAnyPlayerWon()) {
        this.winningPlayer = this.currentPlayer;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  HasAnyPlayerWon(): boolean {
    //Returns a boolean value whether tehere is a winner or not based on the current state of the game board
   
    const conditions = [ //Initialize an array with all the possible winning combinations of the cell indices
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
      [0, 4, 8], [2, 4, 6]             // diagonal 
    ];
    for (let condition of conditions) {
      //Check if the game board contains any of the above winning combinations
      if (this.gameBoard[condition[0]]
        && this.gameBoard[condition[0]] === this.gameBoard[condition[1]]
        && this.gameBoard[condition[1]] === this.gameBoard[condition[2]]) {
        return true;
      }
    }
    return false;
  }

  StartNewGame() {
    //Reset the game board and default the current player to 'X'
    this.gameBoard = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winningPlayer = null;
  }

}
