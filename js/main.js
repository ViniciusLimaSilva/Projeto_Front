//console.log('JS externo funcionou!');
//console.log(window);

//alert('Seja bem vinde!'); // mensagem para usuário

//let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

//let nomeUsuario = prompt('Qual seu nome?'); // retorna texto inserido pelo usuario

let nomeUsuario = 'vinicius';
console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario'); // seleciona o elemento html
console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}`; // atribui conteudo ao elemento selecionado

elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange';

const toggleMode = () => {
  document.body.classList.toggle('dark-mode');
};

setTimeout(() => {
  document.querySelector('.modal').style.display = 'flex';
}, 2000);

const btnClose = () => {
  document.querySelector('.modal').style.display = 'none';
};
