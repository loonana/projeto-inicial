var botao = document.getElementById('botao');
var saida = document.getElementById('saida-de-dados');
var nome  = document.getElementById('nome');
var email  = document.getElementById('email');
var tel  = document.getElementById('telefone');
var cep = document.getElementById('cep');
var logr = document.getElementById('logradouro');
var num = document.getElementById('numero');
var compl = document.getElementById('complemento');
var bairro = document.getElementById('bairro');
var cid = document.getElementById('cidade');
var estd = document.getElementById('estado');

function(dadosDoEndereco){
    logr.value = dadosDoEndereco.logradouro; 
    bairro.value = dadosDoEndereco.bairro; 
    cid.value = dadosDoEndereco.cidade; 
    estd.value = dadosDoEndereco.estado; 
    compl.value = dadosDoEndereco.complemento; 

    saidaDeDados(); // chamada da função

}


function saidaDeDados(){
    
    saida.innerText =
    "Nome :" + nome.value + 
    "\n Email: " + email.value + 
    "\n Telefone: " + tel.value;
    "\n Logradouro: " + logr.value; 
    "\n CEP: " + cep.value; 
    "\n Número: " + num.value; 
    "\n Complemento: " + compl.value; 
    "\n Bairro: " + bairro.value; 
    "\n Cidade: " + cid.value; 
    "\n Estado: " + estd.value; 

}

    // validação dos dados: 

    if(cep.value.length < 8 ){
        alert('CEP inválido');
        return; 
    }

    // formatar dados: 

    cep.value = cep.value.replace('-', ''); 
 
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
   
    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    
    .then(function(dadosDoEndereco){
            logr.value = dadosDoEndereco.logradouro;
            bairro.value = dadosDoEndereco.bairro;
            cid.value = dadosDoEndereco.localidade;
            estd.value = dadosEndereco.uf;
            compl.value = dadosDoEndereco.complemento;
     
        });