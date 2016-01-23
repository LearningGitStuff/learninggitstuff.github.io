var gameOver = false;

$( document ).keypress(function(e) {
  console.log(e);

  if (gameOver == false) {


  var code = e.keyCode || e.which;

 if(code === 81 || code === 113) {

    $( "#player1_strip .active" ).removeClass("active").next().addClass("active");

    if ($("#finish_line_p1").hasClass("active")) {
      gameOver = true;
      alert('Player 1 wins!');
    }

  }

  if(code === 80 || code === 112) {
   $( "#player2_strip .active" ).removeClass("active").next().addClass("active");

   if ($("#finish_line_p2").hasClass("active")) {
      gameOver = true;
      alert('Player 2 wins!');
    }
  }
  }
});

