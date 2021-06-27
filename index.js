
let vetor = []
let input_area = document.getElementById('input_calc')
const wrapper = document.getElementById('wrapper');


wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  const isNumbers = event.target.className === 'numbers';
  if (!isButton) {
    return;
  }
  if(isNumbers){
    vetor.push(event.target.value)
    input_display()
  }
  else{
      console.log("no");
  }
//console.log(event.target.id);
//console.log(event.target.value) //ex. 8

})

  
/* event listener */
input_area.addEventListener('change', getInputValue);
    
/* getInputValue */
function getInputValue(){
    vetor.push(input_area.value)   
    console.log(vetor);
}

function input_display(){
    let whatever = vetor
    let number = null
    // verifica virgula
    // mostrar todos os numeros inseridos
    console.log(whatever);
    if(whatever.length <= 0){
        document.getElementById('input_calc').value = 0
    }
    else{
        number =  parseInt(whatever.join(''));
        document.getElementById('input_calc').value = number
    }

}

function clear_all(){ //C -> limpa todo o input e display1
    document.getElementById('display1').innerHTML = 0
    document.getElementById('input_calc').value = 0
    vetor=[]
}

function clear_input(){ //limpa somente o input
    document.getElementById('input_calc').value = 0
    vetor=[]
}

function number_0(){
    console.log('0')
}

function number_1(){
    
}

function number_2(){
    
}
