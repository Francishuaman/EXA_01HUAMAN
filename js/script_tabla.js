var nom,pre,can,cos,acc;
function crearNodos(Nom, precio, cantidad) {
    var x = document.createElement("tr");
    document.getElementById("cuerpoT").appendChild(x);
    var dato1 = document.createElement("td");
    var dato2 = document.createElement("td");
    var dato3 = document.createElement("td");
    var dato4 = document.createElement("td");
    var dato5 = document.createElement("td");
    x.appendChild(dato1);
    x.appendChild(dato2);
    x.appendChild(dato3);
    x.appendChild(dato4);
    x.appendChild(dato5);
    var txt1 = document.createTextNode(Nom);
    var txt2 = document.createTextNode(precio);
    var txt3 = document.createTextNode(cantidad);
  var subtotal = precio*cantidad;
    var txt4 = document.createTextNode(subtotal);
    var btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "eliminar");
   
    btnDelete.setAttribute("onclick", "borrarTR(this)");
    dato1.appendChild(txt1);
    dato2.appendChild(txt2);
    dato3.appendChild(txt3);
    dato4.appendChild(txt4);
    dato5.appendChild(btnDelete);
}
function defecto(){
    var selector = document.getElementById("producto");
    var indice = selector.options[selector.selectedIndex].value;
    if(indice=="Arroz"){
        pre = 3;
        document.formu.precio.value = pre;
        return precio;
    }else if(indice=="Papa"){
        pre = 1;
        document.formu.precio.value = pre;
        return precio;
    }else if(indice=="Azucar"){
        pre = 2.5;
        document.formu.precio.value = pre;
        return precio;
    }
}
function repetido(nom,pre,can){
    var ta = document.getElementById("cuerpoT");
    for(var i=0;i<ta.rows.length;i++){
        if(ta.rows[i].cells[0].innerHTML==nom){
            ta.rows[i].cells[2].innerHTML = parseFloat(ta.rows[i].cells[2].innerText)+parseFloat(can); 
            ta.rows[i].cells[3].innerHTML = parseFloat(ta.rows[i].cells[1].innerHTML) * parseFloat(ta.rows[i].cells[2].innerHTML);
        }
    }
}
function verificar(nom){
    var ta = document.getElementById("cuerpoT");
    for(var i=0;i<ta.rows.length;i++){
        if(ta.rows[i].cells[0].innerHTML==nom){
            return true;
        }
    }
    return false;
}
function montoT(){
    var ta = document.getElementById("cuerpoT");
    var x = 0;
    for(var i=0;i<ta.rows.length;i++){
        x = x + parseFloat(ta.rows[i].cells[3].innerText);
    }
    return x;
}
function monT(){
    var ta = document.getElementById("cuerpoT");
    var x = 0;
    for(var i=0;i<ta.rows.length;i++){
        x = x + parseFloat(ta.rows[i].cells[3].innerText);
    }
    return x-x*0.18;
}
function montoigv(){
    var ta = document.getElementById("cuerpoT");
    var x = 0;
    for(var i=0;i<ta.rows.length;i++){
        x = x + parseFloat(ta.rows[i].cells[3].innerText);
    }
    return x * 0.18;
}
function añadir(){
    var selector = document.getElementById("producto");
    if (selector.options[selector.selectedIndex].value == "zero" || document.formu.cantidad.value == "") {
        alert("Rellene todos los campos.");
    } else {
        nom = selector.options[selector.selectedIndex].value; 
        can = document.formu.cantidad.value;
        if(verificar(nom)){
            repetido(nom,pre,can);
        }else{
            crearNodos(nom,pre,can);
        }
        document.getElementById("monto").innerHTML = " SubTotal: " + monT() +" <br> "+"    IGV: " + montoigv().toFixed(2) + "  <br>  "+"Total: " + montoT().toFixed(2);
        document.formu.precio.value="";
        document.formu.cantidad.value="";
    }
}

function borrarTR(btn) {
    var fila = btn.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    document.getElementById("monto").innerHTML = "Total: " + montoT().toFixed(2)+"             "+"IGV: " + montoigv().toFixed(2) + "    " + " SubTotal: " + monT();;
}