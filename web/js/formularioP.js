var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexDescripcion = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexPrecio = /^\d{1,8}(\.\d{1,2})?$/;
var enviarDatos=0;

var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByClassName("mensajeNombre")[0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre")[0];

var descripcion=document.getElementById("descripcion");
var mensajeDescripcion=document.getElementsByClassName("mensajeDescripcion")[0];
var circleCrossDescripcion=document.getElementsByClassName("circleCrossDescripcion")[0];
var circleCheckDescripcion=document.getElementsByClassName("circleCheckDescripcion")[0];

var precio=document.getElementById("precio");
var mensajePrecio=document.getElementsByClassName("mensajePrecio")[0];
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio")[0];
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio")[0];


nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
      enviarDatos++;
      mensajeNombre.classList.remove("ocultar");
      nombre.classList.add("error");
      nombre.classList.remove("correcto");
      circleCrossNombre.classList.remove("ocultar");
      circleCheckNombre.classList.add("ocultar");
    }
    else{
      enviarDatos--;
      mensajeNombre.classList.add("ocultar");
      nombre.classList.add("correcto");
      nombre.classList.remove("error");
      circleCrossNombre.classList.add("ocultar");
      circleCheckNombre.classList.remove("ocultar");
    }
  
});


descripcion.addEventListener("blur", ()=>{
    if (!regexDescripcion.test(descripcion.value)) {
        enviarDatos++;
            mensajeDescripcion.classList.remove("ocultar");
            descripcion.classList.add("error");
            descripcion.classList.remove("correcto");
            circleCrossDescripcion.classList.remove("ocultar");
            circleCheckDescripcion.classList.add("ocultar");
          }
          else{
            enviarDatos--;
            mensajeDescripcion.classList.add("ocultar");
            descripcion.classList.add("correcto");
            descripcion.classList.remove("error");
            circleCrossDescripcion.classList.add("ocultar");
            circleCheckDescripcion.classList.remove("ocultar");
          }
});


precio.addEventListener("blur", ()=>{
    if (!regexPrecio.test(precio.value)) {
        enviarDatos++;
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("error");
        precio.classList.remove("correcto");
        circleCrossPrecio.classList.remove("ocultar");
        circleCheckprecio.classList.add("ocultar");
      }
      else{
        enviarDatos--;
        mensajePrecio.classList.add("ocultar");
        precio.classList.add("correcto");
        precio.classList.remove("error");
        circleCrossPrecio.classList.add("ocultar");
        circleCheckPrecio.classList.remove("ocultar");
      }
});

var formularioP=document.getElementById("formularioP")

formularioP.addEventListener("submit",(e)=>{
e.preventDefault();
var avanzar=0;
  if (!regexNombre.test(nombre.value)) {
    enviarDatos++;
    mensajeNombre.classList.remove("ocultar");
    nombre.classList.add("error");
    nombre.classList.remove("correcto");
    circleCrossNombre.classList.remove("ocultar");
    circleCheckNombre.classList.add("ocultar");

  }
  else{
    enviarDatos--;
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("correcto");
    nombre.classList.remove("error");
    circleCrossNombre.classList.add("ocultar");
    circleCheckNombre.classList.remove("ocultar");
    avanzar=1;
  }
  if(avanzar==1){
      formularioP.submit();
  }
  if (!regexDescripcion.test(descripcion.value)) {
    enviarDatos++;
        mensajeDescripcion.classList.remove("ocultar");
        descripcion.classList.add("error");
        descripcion.classList.remove("correcto");
        circleCrossDescripcion.classList.remove("ocultar");
        circleCheckDescripcion.classList.add("ocultar");
      }
      else{
        enviarDatos--;
        mensajeDescripcion.classList.add("ocultar");
        descripcion.classList.add("correcto");
        descripcion.classList.remove("error");
        circleCrossDescripcion.classList.add("ocultar");
        circleCheckDescripcion.classList.remove("ocultar");
        avanzar=1;
      }
      if(avanzar==1){
        formularioP.submit();
    }
    if (!regexPrecio.test(precio.value)) {
      enviarDatos++;
      mensajePrecio.classList.remove("ocultar");
      precio.classList.add("error");
      precio.classList.remove("correcto");
      circleCrossPrecio.classList.remove("ocultar");
      circleCheckPrecio.classList.add("ocultar");
    }
    else{
      enviarDatos--;
      mensajePrecio.classList.add("ocultar");
      precio.classList.add("correcto");
      precio.classList.remove("error");
      circleCrossPrecio.classList.add("ocultar");
      circleCheckPrecio.classList.remove("ocultar");
      avanzar=1;
    }
    if(avanzar==1){
      formularioP.submit();
  }

});