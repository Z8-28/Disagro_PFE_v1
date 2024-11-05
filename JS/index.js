
//Muestra la contraceña que se esta ingresando en el login
function show_password(){
    var password=document.getElementById("password");
    var eye=document.getElementById("eye")
    if(password.type=="password"){
        password.type="text";
        eye.className="fa-solid fa-eye-slash"
    }else{
        password.type="password";
        eye.className="fa-solid fa-eye"
    }
};

//Muestra la contraceña que se esta ingresando en la creacion de usuario
function show_all_passwords(){
    var password1=document.getElementById("password1");
    var password2=document.getElementById("password2");
    var eye=document.getElementById("eye")
    if(password1.type=="password"){
        password1.type="text";
        password2.type="text";
        eye.className="fa-solid fa-eye-slash"
    }else{
        password1.type="password";
        password2.type="password";
        eye.className="fa-solid fa-eye"
    }
};

//Redirecciona a la pagina principal
function login(){
    setTimeout(function(){
        window.location.href = "main_menu.html";
    }, 0);
}

//Redirecciona a la creacion de usuario
function new_acount(){
    setTimeout(function(){
        window.location.href = "new_acount.html";
    }, 0);
}

//Redirecciona al formulario de inicio de secion
function login_form(){
    setTimeout(function(){
        window.location.href = "index.html";
    }, 0);
}

//Mostrar-Ocultar menu desplegable
function menu_desplegable(){
    var menu = document.getElementById("menu_desplegable");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}