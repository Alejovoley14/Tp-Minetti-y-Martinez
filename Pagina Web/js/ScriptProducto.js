$(document).ready(function() {

//Funcion del autocomplete
 $( function autocompletar() {
    var availableTags = [
      "atrapasueños Cielo Infinito",
      "atrapasueños Bosque Encantado",
      "atrapasueños Llamas Rojas",
      "atrapasueños Dulzura Enamoradiza",
      "atrapasueños Ojos Esmeralda",
      "atrapasueños Plumas Primaverales",
      "llavero Arcoiris Alegre",
      "llavero Triple Esperanza",
      "llavero Garras Borravinos",
    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });

  });

}