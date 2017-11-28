$(document).ready(function(){  
    $("#boton").click(function(){

        // Expresión para validar un correo electrónico
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; 

        var nombre = $("#Nombre").val();
        var apellido = $("#Apellido").val();
        var telefono = $("#Telefono").val();
        var email = $("#Email").val();
        var asunto = $("#Asunto").val();
        var mensaje = $("#Mensaje").val();

        //Validacion Nombre
        if(nombre.length < 3){
            $("#mensaje1").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje1").fadeOut();

        //Validacion Apellido
        if(apellido.length < 4){
            $("#mensaje2").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje2").fadeOut();

        //Validacion teléfono
        if (telefono.length < 10){
            $("#mensaje3").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje3").fadeOut();

        //Validacion E-mail
        if(email == "" || !expr.test(email)){
            $("#mensaje4").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje4").fadeOut();

        //Validacion Asunto
        if(asunto.length < 1){
            $("#mensaje5").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje5").fadeOut();

        //Validacion Mensaje
        if(mensaje.length < 1){
            $("#mensaje6").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje6").fadeOut();
            }
            }
            }
            }
            }
            }
});

//Funcion del autocomplete
 $( function autocompletar() {
    var availableTags = [
      "Atrapasueños Cielo Infinito",
      "Atrapasueños Bosque Encantado",
      "Atrapasueños Plumas Primaverales",
      "Llavero Arcoiris Alegre",
      "Llavero Triple Esperanza",
    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });

  });

     //Funcion del DatePicker
     $.datepicker.regional['es'] = {
     closeText: 'Cerrar',
     prevText: '< Ant',
     nextText: 'Sig >',
     currentText: 'Hoy',
     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
     monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
     dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
     dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: false,
     showMonthAfterYear: false,
     yearSuffix: ''
     };
     $.datepicker.setDefaults($.datepicker.regional['es']);

    //para implemetnar datepicker solo se necesita esta funcion lo demas es para ponerla en español
    $(".fecha").datepicker(); 


});  
