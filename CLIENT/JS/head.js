import login from  index.js

function top(user_namae){
    var head = document.getElementsById("head");

    var top_page = document.createElement("div");
    var centrado = document.createElement("div");
    var item = document.createElement("div");
    var p = document.createElement("p");
    var i_bars = document.createElement("i");
    var i_bracket = document.createElement("i");

    top_page.className="top_page";
    top_page.style.textAlign="center";

    centrado.className="centrado";
    item.className="item";

    p.id="usuario";
    p.style.marginRight= '20px';
    p.innerHTML=user_namae;

    i_bars.className="fa-solid fa-bars";
    i_bracket.className="fa-solid fa-right-from-bracket"
    i_bracket.onClick=logout;

}


/*
<!--Cabecera de la pagina-->
    <div class="top_page" style="text-align: center;">
        <div class="centrado"><div class="item, top_left"><i class="fa-solid fa-bars" onclick="menu_desplegable()"></i></div></div>
        <div class="item"><img id="disagro_logo" src="../sources/Disagro_logo_invertido.png" alt="Logo de Disagro" style="height: 100%;"></div>
        <div class="centrado">
            <div class="item, top_right">
                    <p id="usuario" style="margin-right: 20px;">José Quiroa</p>
                    <i class="fa-solid fa-right-from-bracket" onclick="logout()"></i>
            </div>
        </div>
    </div>
*/