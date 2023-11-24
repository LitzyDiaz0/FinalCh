function validar() {
   //  alert($("#user").val());
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var bandera = false;

    alert("Tu usuario es: "+user.value+"   Contraseña: " +password.value);
}

function validar(){
    if (bandera){
        console.log("validacion completa")
    }
}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera = true;
}
