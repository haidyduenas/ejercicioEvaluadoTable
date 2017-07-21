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
    asientos[num - 1] = {
       first_name : nombre,
       last_name : apellido,
       dni: dni,
    };
	guardar.innerHTML= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+info+"</p><p>Nombre: "+nombre+"</p></div><p>Apellido :"+apellido+"</p><p>Dni :"+dni+"</p></center>";
	console.log(asientos);
    celda.style.backgroundColor =  '#5ccc0c';

	document.getElementById("name").value = "";
	document.getElementById("last_name").value= "";
	document.getElementById("dni").value= "";

}

function buscar(ingreso){
	var ingreso=document.getElementById("nro_dni").value;
     
     for (var i = 0; i < asientos.length; i++) {
     	if(ingreso == asiento[i].dni){

  		}
     }
     
}
function listar(){

	var info=document.getElementById("mostrar").textContent;
	var nombre=document.getElementById("name").value;
	var apellido=document.getElementById("last_name").value;
	var dni=document.getElementById("dni").value;
	var guardar=document.getElementById("listar");
            asientos[info - 1] = {
               first_name : nombre,
               last_name : apellido,
               dni: dni,
            };
	guardar.innerHTML+= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+info+"</p><p>Nombre: "+nombre+"</p></div><p>Apellido :"+apellido+"</p><p>Dni :"+dni+"</p></center>";
	console.log(asientos);
}

