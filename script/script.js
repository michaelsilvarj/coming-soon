
let botao = document.querySelector('.btn-enviar');
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validador(email){
return regex.test(email);
}

botao.addEventListener('click', (event)=>{
    event.preventDefault();
    let inputs = document.getElementById('validar').value;
    console.log(inputs);
    
    if(inputs.match(regex)){
        console.log('valido')
    } else{
        console.log('invalido')
    }
    
});