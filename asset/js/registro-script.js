let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nombreUsuario = document.getElementById("nombreUsuario"); 
let error1 = document.getElementById("error1");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    error1.innerHTML = "";

    let nombreV = nombre.value;
    let apellidoV = apellido.value;
    let nombreUsuarioV = nombreUsuario.value; 


    if(nombreV === ""){
        error1.innerHTML = "Debe ingresar el nombre";
        error1.style.color = "red";
        return;
    }


    if(/\d/.test(nombreUsuarioV)) {
        error1.innerHTML = "El nombre de usuario no puede contener números";
        error1.style.color = "red";
        return;
    }


    console.log(`Nombre: ${nombreV}, Apellido: ${apellidoV}, Nombre de Usuario: ${nombreUsuarioV}`);
    nombre.value = "";
    apellido.value = "";
    nombreUsuario.value = "";
    console.log('Registro exitoso');
});
