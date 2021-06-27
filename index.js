
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
//console.log(event.target.id);
//console.log(event.target.value) //ex. 8

input_display(event.target.value)
})


function input_display(number){
    document.getElementById('input_calc').value = number
}

function clear_all(){ //C -> limpa todo o input e display1
    document.getElementById('display1').innerHTML = 0
    document.getElementById('input_calc').value = 0
}

function clear_input(){ //limpa somente o input
    document.getElementById('input_calc').value = 0
}

function number_0(){
    console.log('0')
}

function number_1(){
    
}

function number_2(){
    
}

function number_3(){
    
}

function number_4(){
    
}

function number_5(){
    
}

function number_6(){
    
}

function number_7(){
    
}

function number_8(){
    
}

function number_9(){
    
}