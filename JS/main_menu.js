
//FUNCION DE PROTOTIPADO, esta funcion solo agrega opciones vacias al menu, es para tener una previsualizacion, remover cuando se agregen opciones reales
document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById("menu_desplegable_content");
    for (x=0; x<20; x++){
        menu.append(init_option(x+1));
    }
})

//Mostrar-Ocultar menu desplegable
function menu_desplegable(){
    var menu = document.getElementById("menu_desplegable");
    if(menu.style.display == "block"){
        menu.style.animationPlayState=  "running";
        menu.style.animationDirection= "reverse";
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
        menu.style.animationPlayState= "running";
        menu.style.animationDirection= "normal";

    }
}

function init_option(x){
    var option = document.createElement("p");
    option.innerHTML = `Opción ${x}`;
    option.className = "menu_option";
    return option;
}