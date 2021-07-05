let virgula = false
let novo_num = false



function getMainDisplay(){
    return document.getElementById('input_calc').innerHTML 
}

function addMainDisplay(param){
    document.getElementById('input_calc').innerHTML += param
}

function setMainDisplay(param){
    let txt = ''+param
    console.log(txt);
    let pxp = eval(txt).toFixed(5);
    document.getElementById('input_calc').innerHTML = txt.replace('.',',');
}


function getCalcDisplay(){
    return document.getElementById('display1').innerHTML
}

function addCalcDisplay(param){
    document.getElementById('display1').innerHTML += param
}

function setCalcDisplay(param){
    document.getElementById('display1').innerHTML = param
}

function placeholderZero(){
    if(numero_para_mostrar == "0"){
        numero_para_mostrar = "0"
    }
}

function number_(num){
    if ( getMainDisplay()[0] == 0 && num != 0){
        setMainDisplay(getMainDisplay().substring(1))
    }
    if(novo_num){
        document.getElementById('input_calc').innerHTML = num;
        novo_num = false
        virgula = false
    }
    else{
        document.getElementById('input_calc').innerHTML += num;
    }
}

function symbol_(num){
    setCalcDisplay(getMainDisplay()+num)
    novo_num = true
}

function comma(){
    if(!virgula){
        document.getElementById('input_calc').innerHTML += ','
        virgula = true
    }
    else{
        console.log('virgula existe');
    }
} 


function equal(){
    temp = getMainDisplay() //get input
    addCalcDisplay(temp) // add no Calc
    exp = getCalcDisplay()
    if(exp){
        let txt = exp.replace(/,/g,'.');
        setMainDisplay( txt );
    }
    else{
        console.log('error');
    }
}
function clean(param){
    if(param == 'C'){

    }
    else{

    }
}

function back(){
    let size = getMainDisplay().length
    setMainDisplay( getMainDisplay().substring(0, size-1) );
}
