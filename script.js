function EvaluarDatos(){
 var Nombre,Genero,Ciudad;
 Nombre=document.getElementById('nombre').value;
 if(document.getElementById('pregunta_M').checked){
   Genero="Masculino";
 }else if(document.getElementById('pregunta_F').checked){
     Genero="Femenino";
 }else if (document.getElementById('Otros').checked) {
     Genero="Otros";
 }
 Ciudad=document.getElementById("Ciudad").value;

 document.getElementById("area").value="Nombre:"+Nombre+" "+"Genero:"+Genero+" "+" Ciudad:"+Ciudad;


}
