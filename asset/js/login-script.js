let email = document.getElementById("email");
let password = document.getElementById("password");
let loginError1 = document.getElementById("login-error1");

let loginBtnEnviar = document.getElementById("login-btnEnviar");

loginBtnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    loginError1.innerHTML = "";

    let emailValue = email.value;
    let passwordValue = password.value;


    if(emailValue === ""){
        loginError1.innerHTML = "Debe ingresar el correo electrónico";
        loginError1.style.color = "red";
        return;
    }


    if(passwordValue === ""){
        loginError1.innerHTML = "Debe ingresar la contraseña";
        loginError1.style.color = "red";
        return;
    }

    console.log(`Email: ${emailValue}, Password: ${passwordValue}`);


    email.value = "";
    password.value = "";
    console.log('Inicio de sesión exitoso');
});
