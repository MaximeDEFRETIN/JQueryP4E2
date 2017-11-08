$(function(){
  $('#button').click(function(){
    //J'entre la valeur de chaque input dans desvariables différentes
    var average1 = $('#average1').val();
    var average2 = $('#average2').val();
    var average3 = $('#average3').val();
    var average4 = $('#average4').val();
    var average5 = $('#average5').val();
    //Avec les conditions, on calcule la moyenne si chacune dse notes est comprise entre 0 et 20
    if((average1 || average1 || average1 || average1 || average1) >= 0){
      if((average1 || average1 || average1 || average1 || average1) <= 20){
        var average = (parseInt(average1) + parseInt(average2) + parseInt(average3) + parseInt(average4) + parseInt(average5)) / 5;
      }
      //Sinon, on demande de saisir des notes en 0 et 20
      else{
        $('#text').text('Donnez des notes entre 0 et 20.');
      }
    }

//Ensuite on modifi le contenu de la balise de l'id text selon la moyenne des notes obtenues
    if((average >= 0) && (average < 10)){
      $('#text').text('C\'est inférieur à la moyenne. Tu as une moyenne de ' + average + '.');
    }
    else if ((average >= 10) && (average < 13)) {
      $('#text').text('Tu es dans la moyenne. Tu as une moyenne de ' + average + '.');
    }
    else if ((average >= 13) && (average < 16)) {
      $('#text').text('Bien. Tu as une moyenne de ' + average + '.');
    }
    else if ((average >= 16) && (average < 20)) {
      $('#text').text('Très bien. Tu as une moyenne de ' + average + '.');
    }
    else if (average == 20) {
      //append() -> permet d'insert du contenu à la fin de la cible
      $('#text').text('Excellent. Tu as une moyenne de ' + average + '.');
    }
  });
});
