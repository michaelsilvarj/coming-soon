
let botao = document.querySelector('.btn-enviar');
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let send = document.getElementById("ok");
let erro = document.getElementById("erro");
let enviar = true;


function validador(){
    if (enviar !==true){
        send.classList.remove('valido');
        send.classList.add('invalido');
        erro.classList.add('erro--validacao');
        document.querySelector('.mensagem').innerHTML = 'Please provide a valid email';


    }else if (enviar ===true) {
        send.classList.remove('invalido');
        send.classList.add('valido'); 
        erro.classList.remove('erro--validacao'); 
        erro.classList.add('sucesso--validacao');
        document.querySelector('.mensagem').innerHTML = ''; 
          
    }
}

botao.addEventListener('click', (event)=>{
    event.preventDefault();   
    let inputs = document.getElementById('validar').value;
    console.log(inputs);
    
    if(inputs.match(regex)){
        enviar = true;
          console.log('valido');
          validador();
          document.getElementById('validar').value = '';
    } else{
        enviar = false;
        console.log('invalido');
        validador();
    }
    
});