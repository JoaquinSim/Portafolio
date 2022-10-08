function mostrarBarra(){
    let header = document.getElementById('header');
    let menu = document.getElementById('menu');
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    let slide = document.getElementById('slide');
    let main = document.getElementById('main');
    menu.style.rotate = "180deg"
    menu.style.left = "160px"
    menu1.style.display = "none"
    menu2.style.display = "flex"
    header.style.display = "flex";
    slide.style.opacity = ".5";
    main.style.opacity = ".5"
}
function cerrarBarra(){
    let menu = document.getElementById('menu');
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    let slide = document.getElementById('slide');
    let main = document.getElementById('main');
    menu.style.rotate = "-180deg"
    menu.style.left = "10px"
    menu1.style.display = "flex"
    menu2.style.display = "none"
    let header = document.getElementById('header');
    header.style.display = "none";
    slide.style.opacity = "1";
    main.style.opacity = "1"
}


