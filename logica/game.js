$(document).ready(function() {
    var turn = "X";
    var gameOver = false;
    var moves = 0;
    
    function setMessage(message) {
      $("#message").text(message);
    }
    
    function checkWin() {
      var board = [];
      for (var i = 0; i < 9; i++) {
        board.push($("#" + i).text());
      }
      
      if (
        (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) ||
        (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) ||
        (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) ||
        (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) ||
        (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) ||
        (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) ||
        (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) ||
        (board[2] !== "" && board[2] === board[4] && board[4] === board[6])
      ) {
        gameOver = true;
        return true;
      }
      
      if (moves === 9) {
        gameOver = true;
        return false;
      }
      
      return false;
    }
    
    function handleClick() {
      if (gameOver) {
        return;
      }
      
      if ($(this).text() !== "") {
        setMessage("Essa célula já foi marcada, tente outra.");
        return;
      }
      
      $(this).text(turn);
      moves++;
      
      if (checkWin()) {
        setMessage("O jogador " + turn + " venceu!");
        return;
      }
      
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      
      setMessage("É a vez do jogador " + turn);
    }
    
    $("#game-board td").click(handleClick);
    
    $("#reset").click(function() {
      $("#game-board td").text("");
      setMessage("É a vez do jogador " + turn);
      gameOver = false;
      moves = 0;
    });
    
    setMessage("É a vez do jogador " + turn);
  });