$(document).ready(function() {


	//Fucion del carrito*/

  //funcion que calcula el total de los productos
  
  function total () {

    var tot = parseInt($('#subT').val());
    var tot2 = parseInt($('#subT2').val());
    var tot3 = parseInt($('#subT3').val());

    $("#Total").val(parseInt(tot+tot2+tot3)+50);

  }

  total();


  //funciones que modifican subtotales y total 
  $("#cant").on('keyup mouseup',function() {

     var sub = 150;
     $("#subT").val(parseInt($('#cant').val()) * sub);
     total();

    });

  $("#cant2").on('keyup mouseup',function() {

     var sub2 = 230;
     $("#subT2").val(parseInt($('#cant2').val()) * sub2);
     total();
    });

  $("#cant3").on('keyup mouseup',function() {

     var sub3 = 65;
     $("#subT3").val(parseInt($('#cant3').val()) * sub3);
     total();

    });


  

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

});