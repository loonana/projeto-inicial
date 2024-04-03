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
 
 
botao.addEventListener('click', function(e) {
   
 
    saida.innerText = `Nome: ${nome.value}  ` + 
    `\nEmail: ${email.value}  ` + 
    `\nTelefone: ${telefone.value}  ` + 
    `\nCEP: ${cep.value}  ` + 
    `\nLogradouro: ${logradouro.value}  ` +
    `\nNúmero: ${numero.value}` + 
    `\nComplemento: ${compl.value}  ` + 
    `\nBairro: ${bairro.value}  ` + 
    s`\nCidade: ${cidade.value}` +
    `\nEstado: ${estado.value}`;
 
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
   
    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    
    .then(function(dadosDoEndereco){
            logradouro.value = dadosDoEndereco.logradouro;
            bairro.value = dadosDoEndereco.bairro;
            cidade.value = dadosDoEndereco.localidade;
            estado.value = dadosEndereco.uf;
            complemento.value = dadosDoEndereco.complemento;
     
        });
    });