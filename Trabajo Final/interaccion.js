//Con un input elijo la especialidad del desplegable y pulso el boton mostrar para ver al especialista.
// tambien està el boton ocultar imagen (Esto se encuentra en el primer article)

function especialista(){
    let consultorio = document.getElementById("opciones").value;
    document.getElementById("foto").src="Imagenes/"+ consultorio+".jpg";
    
     };


     //Oculto la imagen sin jquery y dejar preparado para volver a selecionar otra opcion

     document.querySelector("#btn").addEventListener("click", function() { 
     document.querySelector("#foto").style.display = "none"; 
     document.querySelector("#opciones").selectedIndex = 0; 
       });


     document.querySelector("#opciones").addEventListener("change", function() {
      if (this.selectedIndex !== 0) {
     document.querySelector("#foto").style.display = "block";
     }
      });


 

//Preparamos la funcion para validar, nos avisarà si algun dato no corresponde al formato del input.
//Tambien avisarà si falta cargar alguna casilla oblidatoria o si tiene algun error.
// Al cargarse los datos correctamente, nos enviarà el mensaje de carga correcta y nos mostrarà lo cargado.


let formulario= document.getElementById("ficha");

formulario.addEventListener("submit", function(event){
   event.preventDefault();

//Cargamos los valores a las variables:
   let nombre= document.getElementById("nombre").value.trim();
   let apellido= document.getElementById("apellido").value.trim();
   let edad= document.getElementById("edad").value.trim();
   let email= document.getElementById ("email").value.trim();
   

//Crgamos variables para los errores tambien:
   let errorNombre= document.getElementById("errorNombre");
   let errorApellido= document.getElementById("errorApellido");
   let errorEdad= document.getElementById("errorEdad");
   let errorEmail= document.getElementById("errorEmail");
  

 //Les colocamos los alert para q carguen los datos:
     if(nombre==""){
        alert("Por favor, ingrese su nombre");
        return;
     }
     if(apellido==""){
        alert("Por favor, ingrese su apellido");
        return;
     }
     if(edad==""){
        alert("Por favor, ingrese su edad");
        return;
     }
     
     if(email ==""){
       alert("Por favor, ingrese el email");
        return;
     }
   

//Validamos cada ingreso y se envía nota si hay algun error:
    let validar= true;

    if(!isNaN(nombre)){
        document.getElementById("errorNombre").textContent= "El nombre no puede contener numeros";
        validar= false;
    }
    if(!isNaN(apellido)){
        document.getElementById("errorApellido").textContent= "El apellido no puede contener numeros";
        validar= false;
    }
    if (isNaN(edad) || edad === ""){
        document.getElementById("errorEdad").textContent= "La edad es invalida";
        validar= false;
    }

    if(email==""){
        document.getElementById("errorEmail").textContent= "El email es incorrecto";
        validar= false;
    }




//Lo vemos en la consola, mensaje de carga correcta y los datos subidos:

    if (validar){
        console.log("formulario enviado correctamente");
               document.getElementById("resultado").innerHTML += " Los datos se han registrado correctamente."+"<br>";
              document.getElementById("resultado").innerHTML += "Nombre:" + nombre + "<br>";
              document.getElementById("resultado").innerHTML += "Apellido:" + apellido + "<br>";
              document.getElementById("resultado").innerHTML += "Edad:" + edad + "<br>";
              document.getElementById("resultado").innerHTML += "email:" + email + "<br>";
              
        } else{
            console.log("Hay un error");
        }

       
//limpio los input:

        document.getElementById("nombre").value="";
        document.getElementById("apellido").value="";
        document.getElementById("edad").value="";
        document.getElementById("email").value="";
    

});



// Boton modo claro/ oscuro.

let botonOscuro= document.getElementById("modo");
botonOscuro.addEventListener("click", function(){

    document.body.classList.toggle("oscuro");

    if(document.body.classList.contains("oscuro")){
        botonOscuro.innerHTML="Pantalla Clara";
    } else{
        botonOscuro.innerHTML="Pantalla Oscura";
    }

})