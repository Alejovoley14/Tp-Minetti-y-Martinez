$(document).ready(function(){

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


function Validacion(){
 
		var nombre = document.getElementById('Nombre').value;
        var apellido = document.getElementById('Apellido').value;
        var telefono = document.getElementById('Telefono').value;
        var email = document.getElementById('Email').value;
       	var asunto = document.getElementById('Asunto').value;
		var mensaje = document.getElementById('Mensaje').value;
        
  
// Validación de Nombre
		if(nombre == null || nombre.length < 3){
			alert('Por favor, ingrese su nombre.\nDebe tener más de 3 caracteres.');
            document.form.telefono.focus();
			return false;
		}
        
// Validación de Apellido
		if(apellido == null || apellido.length < 4){
			alert('Por favor, ingrese su apellido.\nDebe tener más de 4 caracteres.');
            document.form.telefono.focus();
			return false;
		}
 
// Validación de Telefono 
		if( !(/^\d{10}$/.test(telefono))){
            alert("Por favor, ingrese un teléfono válido (10 dígitos).");
            document.form.telefono.focus();
            return false;
        }

// Validación de Email
		if(!(/\S+@\S+\.\S+/.test(email))){
			alert('Por favor, ingrese su correo electrónico.\nEjemplo: usuario@dominio.com');
            document.form.telefono.focus();
			return false;
		}

//Validación de Asunto
		if(nombre == null){
			alert('Por favor, ingrese un asunto.');
            document.form.telefono.focus();
			return false;
		}

//Validación de Mensaje
		if(mensaje == null){
			alert('Si desea contactarse con nosotros, Por Favor escriba su mensaje.');
            document.form.telefono.focus(); 
			return false;
		}
    return true;
}