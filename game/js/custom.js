$(document).ready(function() {
  //variable definition 
  var Board = [['.','.','.'],['.','.','.'],['.','.','.']];
  var playerSymbol = ['X','O'];
  var currentPlayer = 'X';
  //function starts here
  function initializeBoard() {
    Board = [['.','.','.'],['.','.','.'],['.','.','.']];
  }
  function assignCell(row, col, symbol) {
    Board[row][col] = symbol; 

  }
  function changePlayer() {
    if(currentPlayer == 'X') currentPlayer = 'O';
    else currentPlayer = 'X';  
  }
  function checkWin() {

  }
  // Main program starts here 
  initializeBoard();

  $(".cell").click(function() {
    var row = $(this).data('row');
    var col = $(this).data('col');
    var symbol = $(this).data('symbol');
    if(symbol != '.') {
      alert("Already Selected cell. Please choose another");
    }
    else {
      assignCell(row,col,currentPlayer); //currentPlayer in char
      $(this).data('symbol','X'); //assigning data attribute
      $(this).html(currentPlayer); //assigning data attribute
      checkWin();
      changePlayer();  
    }
    
  });
});