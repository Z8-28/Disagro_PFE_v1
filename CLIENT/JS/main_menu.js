
//FUNCIÓN DE PROTOTIPADO, esta función solo agrega opciones vacias al menu, es para tener una previsualizacion, remover cuando se agregen opciones reales
document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById("menu_desplegable_content");
    for (x=0; x<20; x++){
        menu.append(init_option(x+1));
    }
})

//Función secundaria para prototipado, eliminar cuando se cree la pagina real
function init_option(x){
    var option = document.createElement("p");
    option.innerHTML = `Opción ${x}`;
    option.className = "menu_option";
    option.onclick = init_option_link;
    return option;
}

//Función secundaria para prototipado, eliminar cuando se cree la pagina real
function init_option_link(){
    setTimeout(function(){
        window.location.href = "menu_option.html";
    }, 0);
}

//Mostrar-Ocultar menu desplegable
function menu_desplegable(){
    var menu = document.getElementById("menu_desplegable");
    const isHidden = window.getComputedStyle(menu).width === '0px';
    
    // Pausar la animación y removerla momentáneamente
    menu.style.animation = 'none';
    menu.offsetHeight; // Forzar un reflow para "resetear" la animación
    
    // Configurar la animación nuevamente con la dirección deseada
    menu.style.animation = 'despliegue_menu 1.5s forwards ease-out';
    menu.style.animationDirection = isHidden ? 'normal' : 'reverse';
}