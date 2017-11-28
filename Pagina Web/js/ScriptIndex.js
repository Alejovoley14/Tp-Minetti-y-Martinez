$(document).ready(function() {

  //Fucnion del Slider
    var width = 1100;
    var animationSpeed = 5000;
    var pause = 8000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
  


  //Fucion del carrito*/
  $(".carrito").click(function() {

    if ($("#cuenta").val()<=9) {

      incrementar(); 
    }
     else{
        alert("Ha alcanzado el numero maximo de productos en su carrito")
     } 

    });


  //funcion que incrementa con Jqeury
   function incrementar() {  
    
    var valor = $("#cuenta").val();

    $("#cuenta").val(parseInt(valor)+1);

}

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
  
  





  


 


	