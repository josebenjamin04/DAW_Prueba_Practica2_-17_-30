function pedidos(comb, cantComb,totalCompra){//Objeto donde se guarga la info de los pedidos

    this.comb = comb;
    this.cantComb = cantComb;
    this.totalCompra = totalCompra;
}

function get_data(){//Obtiene los datos 
    frmCP = document.getElementById('formCP');
    combo = frmCP.elements['combo'].value;
    cantC = frmCP.elements['cantC'].value;
    check = frmCP.elements['check'];
}
//Funciones para mostrar los txt de cantidad de productos
function show_txt(){
    
    document.getElementById("this").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt1(){
    
    document.getElementById("this1").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt2(){
    
    document.getElementById("this2").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt3(){
    
    document.getElementById("this3").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt4(){
    
    document.getElementById("this4").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt5(){
    
    document.getElementById("this5").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt6(){
    
    document.getElementById("this6").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt7(){
    
    document.getElementById("this7").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt8(){
    
    document.getElementById("this8").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}
function show_txt9(){
    
    document.getElementById("this9").innerHTML = "<input type='number' name='cantP' value='1' min='1'>";
}

function show_data(){//Muestra los detalles de la compra
    document.getElementById("factura").innerHTML = "<h2>Detalles de la compra</h2>  <label id='comboS'>Combo Seleccionado: </label> <br><br> <label id='cntCmbs'>Cantidad: </label> <br><br> <label id='total'>Total a pagar: $</label>";
    document.getElementById("total").innerHTML += RegistroP.totalCompra.toFixed(2);
    document.getElementById("comboS").innerHTML += RegistroP.comb;
    document.getElementById("cntCmbs").innerHTML += RegistroP.cantComb + " combo(s)";

}

function verify_data(cmb, CntC){//Verifica los datos ingresados
verify = true;
if(cmb == ""){
    alert("¡Seleccione un combo!");
        verify = false;
    }else{
        if(CntC <= 0 || cantC % 1 != 0){
            alert("¡Ingrese una cantidad válida de combos!");
            verify = false;
            }
    }
}


function program(){//Función principal
    get_data();
    verify_data(combo, cantC)
    if(verify == true){
        switch (combo) {
            case "Super Combo":
                prec = 7.25
                break;
            case "Combo Personal":
                prec = 7.75
                break;
            case "Combo Infántil":
                prec = 3.50
                break;
            default:
                prec = 0.00
                break;
        }
        precC = parseFloat(prec) * parseInt(cantC);
        RegistroP = new pedidos(combo, cantC, precC);
        show_data();
    }
}
window.onload = init;
function init() {
var view = document.getElementById('view');
var area = document.getElementById('area');
view.onclick = edit;
document.onkeydown = function(e) {
e = e || event;
// Escape
if(e.keyCode == 27) {
cancel();
return false;
}
if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
edit();return false;
}
if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
save();
return false;
}
}
function edit() {
//Ocultar el elemento div
view.style.display = 'none';
//Dibujar el campo textarea y ponerle estilos
area.value = view.innerHTML;
area.style.display = 'block';
area.style.height = '80px';
area.style.padding = '6px';
area.style.width = '444px';
area.focus();
}
function save() {
area.style.display = 'none';
view.innerHTML = area.value;
view.style.display = 'block';
view.style.letterSpacing = '1.2px';
}
function cancel() {
area.style.display = 'none';
view.style.display = 'block';
}
}
  
