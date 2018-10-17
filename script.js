$(function(){
  $('#button').click(function(){
    var playerChois = Number($('#playerChois').val()) //valeur de notre choix
    //création d'un nombre aléatoire entre 0 et 2 (entier)
    var randNumber = Math.round(Math.random()*2);

    if(playerChois == 4){
      //effectue une alerte en fonction du nombre genéré par la fonction random
      switch(randNumber){
        case 0:
        alert('perdu');
        break;
        case 1:
        alert('gagner');
        break;
        case 2:
        alert('égualité');
        break;
      }

    } else if(playerChois == 5){

      switch(randNumber){
        case 0:
        alert('égualité');
        break;
        case 1:
        alert('perdu');
        break;
        case 2:
        alert('gagner');
        break;
      }

    } else {

      switch(randNumber){
        case 0:
        alert('gagner');
        break;
        case 1:
        alert('égualité');
        break;
        case 2:
        alert('perdu');
        break;
      }
    }
  });
});
