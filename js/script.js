    var home = document.getElementById("home");
    var venta = document.getElementById("venta");
    var tab = document.getElementById("tablita");
    var hom = document.getElementById("casa");
function Venta(){
   
    home.style.background="#000";
    venta.style.background="rgba( 150, 150, 150, 0.714 )";
    tabla();
}
function Home(){
    
    venta.style.background="#000";
    home.style.background="rgba( 150, 150, 150, 0.714 )";
    casa();
}
function tabla(){
    
    hom.style.height="0";
    hom.style.padding="0";
    hom.style.overflow="hidden";
    tab.style.height="300px";
    tab.style.overflow="visible";
}
function casa(){
  
    tab.style.height="0";
    tab.style.padding="0";
    tab.style.overflow="hidden";
    hom.style.height="300px";
    hom.style.overflow="visible";
}