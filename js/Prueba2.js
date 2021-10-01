function pedidos(comb, cantComb,totalCombos, totalPA, totalCompra){//Objeto donde se guarga la info de los pedidos

    this.comb = comb;
    this.cantComb = cantComb;
    this.totalCombos = totalCombos;
    this. totalPA =  totalPA;
    this.totalCompra = totalCompra;
}

function program(){//Función principal
    get_data();
    verify_data(combo, cantC);
    calculo_PA();
    if(verify == true && verify2 == true){
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
        precTC = parseFloat(prec) * parseInt(cantC);
        precioT = parseFloat(precTC) + parseFloat(precTP);
        RegistroP = new pedidos(combo, cantC, precTC, precTP, precioT);
        show_data();
    }
}

function get_data(){//Obtiene los datos para los combos
    frmCP = document.getElementById('formCP');
    combo = frmCP.elements['combo'].value;
    cantC = frmCP.elements['cantC'].value;
}
//Funciones para mostrar los txt pra ingresar la cantidad de productos, en caso de ser seleccionado uno
check1 = false;
function show_txt(){
    document.getElementById("this").innerHTML = "<input type='number' value='1' id='cantP1' min='1'>";
    check1 = true;
}

check2 = false;
function show_txt1(){
    document.getElementById("this1").innerHTML = "<input type='number' value='1' id='cantP2' min='1'>";
    check2 = true;
}

check3 = false
function show_txt2(){
    document.getElementById("this2").innerHTML = "<input type='number' id='cantP3' value='1' min='1'>";
    check3 = true;
}

check4 = false;
function show_txt3(){
    document.getElementById("this3").innerHTML = "<input type='number' id='cantP4' value='1' min='1'>";
    check4 = true;
}

check5 = false;
function show_txt4(){
    document.getElementById("this4").innerHTML = "<input type='number' id='cantP5' value='1' min='1'>";
    check5 = true;
}

check6 = false;
function show_txt5(){
    
    document.getElementById("this5").innerHTML = "<input type='number' id='cantP6' value='1' min='1'>";
    check6 = false
}

check7 = false;
function show_txt6(){
    document.getElementById("this6").innerHTML = "<input type='number' id='cantP7' value='1' min='1'>";
    check7 = true;
}

check8 = false;
function show_txt7(){
    document.getElementById("this7").innerHTML = "<input type='number' id='cantP8' value='1' min='1'>";
    check8 = true;
}

check9 = false;
function show_txt8(){
    document.getElementById("this8").innerHTML = "<input type='number' id='cantP9' value='1' min='1'>";
    check9 = true;
}

check10 = false;
function show_txt9(){
    document.getElementById("this9").innerHTML = "<input type='number' id='cantP10' value='1' min='1'>";
    check10 = true;
}

function calculo_PA(){//Calcula el precio total de productos adicionales seleccionados 
    precTP = 0;
    if(check1 == true){
        cantP1 = document.getElementById("cantP1").value;
        verify_data2(cantP1);
        precP1 = document.getElementById("check1").value;
        precP1 = parseFloat(precP1) * parseFloat(cantP1);
        precTP += parseFloat(precP1);
    }
    if(check2 == true){
        cantP2 = document.getElementById("cantP2").value;
        verify_data2(cantP2);
        precP2 = document.getElementById("check2").value;
        precP2 = parseFloat(precP2) * parseFloat(cantP2);
        precTP += parseFloat(precP2);
    }
    if(check3 == true){
        cantP3 = document.getElementById("cantP3").value;
        verify_data2(cantP3);
        precP3 = document.getElementById("check3").value;
        precP3 = parseFloat(precP3) * parseFloat(cantP3);
        precTP += parseFloat(precP3);
    }
    if(check4 == true){
        cantP4 = document.getElementById("cantP4").value;
        verify_data2(cantP4);
        precP4 = document.getElementById("check4").value;
        precP4 = parseFloat(precP4) * parseFloat(cantP4);
        precTP += parseFloat(precP4);
    }
    if(check5 == true){
        cantP5 = document.getElementById("cantP5").value;
        verify_data2(cantP5);
        precP5 = document.getElementById("check5").value;
        precP5 = parseFloat(precP5) * parseFloat(cantP5);
        precTP += parseFloat(precP5);
    }
    if(check6 == true){
        cantP6 = document.getElementById("cantP6").value;
        verify_data2(cantP6);
        precP6 = document.getElementById("check6").value;
        precP6 = parseFloat(precP6) * parseFloat(cantP6);
        precTP += parseFloat(precP6);
    }
    if(check7 == true){
        cantP7 = document.getElementById("cantP7").value;
        verify_data2(cantP7);
        precP7 = document.getElementById("check7").value;
        precP7 = parseFloat(precP7) * parseFloat(cantP7);
        precTP += parseFloat(precP7);
    }
    if(check8 == true){
        cantP8 = document.getElementById("cantP8").value;
        verify_data2(cantP8);
        precP8 = document.getElementById("check8").value;
        precP8 = parseFloat(precP8) * parseFloat(cantP8);
        precTP += parseFloat(precP8);
    }
    if(check9 == true){
        cantP9 = document.getElementById("cantP9").value;
        verify_data2(cantP9);
        precP9 = document.getElementById("check9").value;
        precP9 = parseFloat(precP9) * parseFloat(cantP9);
        precTP += parseFloat(precP9);
    }
    if(check10 == true){
        cantP10 = document.getElementById("cantP10").value;
        verify_data2(cantP10);
        precP10 = document.getElementById("check10").value;
        precP10 = parseFloat(precP10) * parseFloat(cantP10);
        precTP += parseFloat(precP10);
    }
    if(check1 == false && check2 == false &&check3 == false  && check4 == false && check5 == false && check6 == false &&
        check7 == false && check8 == false && check9 == false && check10 == false){//Validación para que sea seleccionado al menos un producto adicional
        alert("¡Debe seleccionar al menos un producto adicional!")
    }
}

function verify_data(cmb, CntC){//Verifica los datos ingresados de combos
    verify = true;
    if(cmb == ""){
        alert("¡Seleccione un combo!");
            verify = false;
        }else{
            if(CntC <= 0 || CntC % 1 != 0){
                alert("¡Ingrese una cantidad válida de combos!");
                verify = false;
            }
    }
}

function verify_data2(CntP){//Verifica los datos ingresados de productos adicionales
    verify2 = true;
    if(CntP <= 0 || CntP % 1 != 0){
    alert("¡Ingrese una cantidad válida de productos!");
    verify2 = false;
    }
}

function show_data(){//Muestra los detalles de la compra
    document.getElementById("factura").innerHTML = "<h2>Detalles de la compra</h2>  <label id='comboS'>Combo Seleccionado: </label> <br><br> <label id='cntCmbs'>Cantidad: </label> <br><br> <label id='totalC'>Total por combos: $</label> <br><br> <label id='totalPA'>Total por productos adicionales: $</label>  <br><br> <label id='total'>Subtotal a pagar: $</label>";
    document.getElementById("totalC").innerHTML += RegistroP.totalCombos.toFixed(2);
    document.getElementById("totalPA").innerHTML += RegistroP.totalPA.toFixed(2);
    document.getElementById("total").innerHTML += RegistroP.totalCompra.toFixed(2);
    document.getElementById("comboS").innerHTML += RegistroP.comb;
    document.getElementById("cntCmbs").innerHTML += RegistroP.cantComb + " combo(s)";

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
 
