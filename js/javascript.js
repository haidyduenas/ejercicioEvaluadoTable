
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
}


function reserva () {
var name = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var dni = document.getElementById('dni').value;
var resultado = document.getElementById('mostrar');
resultado.innerHTML = name;

}

