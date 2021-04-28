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

let formContact = document.querySelector('#form_contact');

document.querySelector('#btn-submit').addEventListener('click', (evento) => {
  evento.preventDefault(); // cancelando o envio temporariamente
  /*
  let nomevalue = document.querySelector('#input_nome').value;
  let emailvalue = document.querySelector('#input_email').value;

  console.log(nomevalue);
  console.log(emailvalue);

  */

  let nomeValue = document.querySelector('#input_nome').value;
  let emailValue = document.querySelector('#input_email').value;
  let telefoneValue = document.querySelector('#input_telefone').value;
  let mensagemValue = document.querySelector('#mensagem').value;
  let divMensagemErro = document.querySelector('.mensagem-erro');

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  if (
    nomeValue.length < 2 ||
    emailValue.length < 1 ||
    telefoneValue.length < 1 ||
    mensagemValue.length < 1
  ) {
    alert('Todos os campos devem ser preenchidos');
    return false;
  } else {
    if (nomeValue.length < 3) {
      alert('Insira um nome válido');
      return false;
    } else {
      if (telefoneValue.length < 8) {
        alert('Número de telefone deve conter no mínimo 8 dígitos');
        return false;
      } else {
        if (!isEmail(emailValue)) {
          alert('insira um email valido');

          return false;
        } else {
          form_contact.submit();
          console.log(nomeValue, telefoneValue, emailValue, mensagemValue);
        }
      }
    }
  }

  // validar se todos os campos estão preenchido
  // validar se nome tem 2 ou mais caracteres
  // validar se telefone tem no minimo 8 caracteres
  // validar se o campo email tem @ (Google - validação email com regex)
});
