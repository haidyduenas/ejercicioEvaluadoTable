var asientos = new Array (32);
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;

    celda = event.target;

    var info=document.getElementById("mostrar").textContent;
	var num = parseInt (info);
    var obj = asientos[num - 1] ;

    if (obj != undefined ) {

	    	
		document.getElementById("name").value = obj.first_name;
		document.getElementById("last_name").value=  obj.last_name;
		document.getElementById("dni").value=  obj.dni;
    }
}

function reservar(){
	var info=document.getElementById("mostrar").textContent;
	var nombre=document.getElementById("name").value;
	var apellido=document.getElementById("last_name").value;
	var dni=document.getElementById("dni").value;
	var guardar=document.getElementById("listar");
 	
 	var num = parseInt (info);
    asientos[num-1]= {
       first_name : nombre,
       last_name : apellido,
       dni: dni
    };
  
	guardar.innerHTML= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+info+"</p><p>Nombre: "+nombre+"</p></div><p>Apellido :"+apellido+"</p><p>Dni :"+dni+"</p></center>";
	console.log(asientos);
    celda.style.backgroundColor =  '#5ccc0c';

	document.getElementById("name").value = "";
	document.getElementById("last_name").value= "";
	document.getElementById("dni").value= "";

}

function listar() {

  var lista = "";
  for (var i = 1; i <= asientos.length; i++) {
    if (asientos[i-1]!= undefined) {
      var lugar = "<h3>Asiento: </h3>"+i+"<br>";
      var nombre = "<h3>Nombres: </h3>" + asientos[i-1].first_name + "<br>";
      var apellido = "<h3>Apellidos: </h3>" + asientos[i-1].last_name + "<br>";
      var dni = "<h3>DNI: </h3>" + asientos[i-1].dni + "<br>";
      lista += lugar+ nombre + apellido+ dni;
    }
  }
  document.getElementById("listar").innerHTML=lista;
}

function buscar(){
  var dniBusqueda =document.getElementById("nro_dni").value;
  
  for (var i = 1; i <= asientos.length; i++) {
    var obj=asientos[i-1];
    if (asientos[i-1]!= undefined && dniBusqueda == asientos[i-1].dni) {
      document.getElementById("name").value = obj.first_name;
      document.getElementById("last_name").value=  obj.last_name;
      document.getElementById("dni").value=  obj.dni;
    }
  }


}