
var cont1 = 0
var cont2 = 0
var score1 = 0
var score2 = 0

// $("#score").text(`Rojo : ${score1} / amarillo : ${score2}`)

$('#score').text(`Rojo : ${score1} / amarillo : ${score2}`)

$(document).keyup(function (e) {
  if (e.key === 'a'){
    cont1 = cont1+35
    $('#1').offset({
       left:  e.pageX + cont1
  });
      }

  if(e.key==="ArrowRight"){
    cont2 = cont2+35
    $('#2').offset({
       left:  e.pageX + cont2
    });
  }

  if ($("#1").position().left >= $("#rec").position().left) {
    alert("el jugador 1 Gano!")
  }
  if ($("#2").position().left >= $("#rec").position().left) {
    alert("el jugador 2 Gano!")
  }




console.log(e.key);
});
