function get_data(){
    frmCP = document.getElementById('formCP');
    combo = frmCP.elements['combo'].value;
    cantC = frmCP.elements['cantC'].value;
}

function show_data(){
    total = document.getElementById("total"); 
    total.value = precC.toFixed(2);
}

function verify_data(CntC){
verify = true;
if(CntC < 0 || cantC % 1 != 0){
alert("Ingrese una cantidad valida de combos");
verify = false;
  }
}
function program(){
    get_data();
    verify_data(cantC)
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
        show_data();
    }
    
}
  