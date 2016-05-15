$(document).ready(function() {
  //variable definition 
  var Board = [['.','.','.'],['.','.','.'],['.','.','.']];
  var playerSymbol = ['X','O'];
  var currentPlayer = 'X', turn;
  xwin = 0, owin = 0, draw = 0;
  //function starts here
  function initializeBoard() {
    turn = 0;
    $(".cell").data('symbol','.');
    $(".cell").html('.');
    currentPlayer = 'X';
    Board = [['.','.','.'],['.','.','.'],['.','.','.']];
    $(".Xwin").html("X has won "+xwin+" times");
    $(".Owin").html("O has won "+owin+" times");
    $(".Draw").html("Match drawn "+draw+ " times");
  }
  function assignCell(row, col, symbol) {
    Board[row][col] = symbol; 

  }
  function changePlayer() {
    turn++;
    if(currentPlayer == 'X') currentPlayer = 'O';
    else currentPlayer = 'X';  
  }
  function checkWin() {
    flag = 0;
    if(Board[0][0] == 'X' && Board[0][1] == 'X' && Board[0][2]=='X') flag = 1;
    if(Board[1][0] == 'X' && Board[1][1] == 'X' && Board[1][2]=='X') flag = 1;
    if(Board[2][0] == 'X' && Board[2][1] == 'X' && Board[2][2]=='X') flag = 1;  
    if(Board[0][0] == 'X' && Board[1][0] == 'X' && Board[2][0]=='X') flag = 1;
    if(Board[0][1] == 'X' && Board[1][1] == 'X' && Board[2][1]=='X') flag = 1;
    if(Board[0][2] == 'X' && Board[1][2] == 'X' && Board[2][2]=='X') flag = 1;  
    if(Board[0][0] == 'X' && Board[1][1] == 'X' && Board[2][2]=='X') flag = 1;
    if(Board[2][0] == 'X' && Board[1][1] == 'X' && Board[0][2]=='X') flag = 1; 
    if(Board[0][0] == 'O' && Board[0][1] == 'O' && Board[0][2]=='O') flag = 2;
    if(Board[1][0] == 'O' && Board[1][1] == 'O' && Board[1][2]=='O') flag = 2;
    if(Board[2][0] == 'O' && Board[2][1] == 'O' && Board[2][2]=='O') flag = 2;  
    if(Board[0][0] == 'O' && Board[1][0] == 'O' && Board[2][0]=='O') flag = 2;
    if(Board[0][1] == 'O' && Board[1][1] == 'O' && Board[2][1]=='O') flag = 2;
    if(Board[0][2] == 'O' && Board[1][2] == 'O' && Board[2][2]=='O') flag = 2;  
    if(Board[0][0] == 'O' && Board[1][1] == 'O' && Board[2][2]=='O') flag = 2;
    if(Board[2][0] == 'O' && Board[1][1] == 'O' && Board[0][2]=='O') flag = 2; 
    if(flag == 1) {
      alert("Player X Wins");
      xwin++;
      console.log("x has won");
      console.log(xwin);
      initializeBoard();
    }
    else if (flag == 2) {
      alert("Player O Wins");
      owin++;
      console.log("O has won");
      initializeBoard();
    }
    else {
      if(turn==8) {
        draw++;
        alert("Draw");
        console.log("draw");
        initializeBoard();   
      }
      else {
      changePlayer();
      }
    }
  }
  // Main program starts here 
  
  initializeBoard();
  console.log(xwin+" , "+owin+" , "+draw);
  
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
    }
  });
});