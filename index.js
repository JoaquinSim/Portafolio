function mostrarBarra(){
    let menu = document.getElementById('menu');
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    menu.style.rotate = "180deg"
    menu.style.left = "110px"
    menu1.style.display = "none"
    menu2.style.display = "flex"
    let header = document.getElementById('header');
    header.style.display = "flex";
}
function cerrarBarra(){
    let menu = document.getElementById('menu');
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    menu.style.rotate = "-180deg"
    menu.style.left = "10px"
    menu1.style.display = "flex"
    menu2.style.display = "none"
    let header = document.getElementById('header');
    header.style.display = "none";
}
