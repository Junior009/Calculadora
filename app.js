var n1 = document.querySelector('#txt_n1')
var n2 = document.querySelector('#txt_n2')
var result = document.querySelector('#result')

function soma(){
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}

function sub(){
    result.innerHTML = parseInt(n1.value) - parseInt(n2.value);
}
function div(){
    result.innerHTML = parseInt(n1.value) / parseInt(n2.value);
}
function mult(){
    result.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}

function mostrar(btn){
    n1.innerHTML = n1.value + btn.value
}
