$(document).ready(function() {
  // Initial state
  var Board = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]
  
  var playerSymbols = ['X', 'O']
  
  var currentPlayer = 1;
  
  // Board and player related functions
  function setCellSymbol(row, column, symbol) {
    Board[row-1][column-1] = symbol;
  }

  function checkGameOver() {
  } 

  function togglePlayer() {
    if (currentPlayer == 1) {
      currentPlayer = 2;
    }
    else {
      currentPlayer = 1;
    }
  }

  function getPlayerSymbol(player_id) {
    return playerSymbols[player_id-1];
  }


  // UI related functions  
  $(".cell").click(function(){
    
    var col = $(this).data('col');
    var row = $(this).data('row');
    var currentSymbol = $(this).data('symbol');
  
    if(currentSymbol === undefined || currentSymbol == null) {
      var symbol = getPlayerSymbol(currentPlayer);
      $(this).html(symbol);
      $(this).data('symbol', symbol);
      setBoardState(row, col, symbol);
      checkGameOver();
      togglePlayer();

    }
   
  });
});
