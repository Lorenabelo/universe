const aboutImage = document.querySelector('.about__image');
const countSocialFollowers = document.querySelector('.about__social-followers-count');
const countSocialRepos = document.querySelector('.about__social-repos-count');

const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');
const btnSubmit = document.getElementById('contact__submit');

let nameOk = false;
let emailOk = false;
let subjectOk = false;
let messageOk = false;


const url = 'https://api.github.com/users/lorenabelo';
fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        aboutImage.src = data.avatar_url;
        countSocialFollowers.textContent = data.followers;
        countSocialRepos.textContent = data.public_repos;
    })
    .catch(error => {
        console.error('Erro:', error);
});

function validatedName() {

    const messageValidated = document.getElementById('validated__name');

    if (contactName.value == '' || contactName.value.length < 3) {
        messageValidated.textContent = 'Nome inválido. Por favor, preencha com seu Nome e Sobrenome.';
        messageValidated.style.color = 'red';
        messageValidated.style.display = 'inline-block';
        nameOk = false;
    } else {
        messageValidated.textContent = "";
        nameOk = true;
    }
}

contactName.addEventListener('keyup', validatedName);

function validatedEmail() {

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const messageValidated = document.getElementById('validated__email');

    if (!contactEmail.value.match(regex)) {
        messageValidated.textContent = 'E-mail inválido.';
        messageValidated.style.color = 'red';
        messageValidated.style.display = 'inline-block';
        emailOk = false;
    } else {
        messageValidated.textContent = "";
        emailOk = true;
    }
}

contactEmail.addEventListener('keyup', validatedEmail);

function validatedSubject() {

    const messageValidated = document.getElementById('validated__subject');

    if (contactSubject.value == '' || contactSubject.value.length < 3) {
        messageValidated.textContent = 'Informe o assunto da mensagem.';
        messageValidated.style.color = 'red';
        messageValidated.style.display = 'inline-block';
        subjectOk = false;
    } else {
        messageValidated.textContent = "";
        subjectOk = true;
    }
}

contactSubject.addEventListener('keyup', validatedSubject);

function validatedMessage() {

    const messageValidated = document.getElementById('validated__message');

    if (contactMessage.value == '' || contactMessage.value.length < 3) {
        messageValidated.textContent = 'Insira uma mensagem.';
        messageValidated.style.color = 'red';
        messageValidated.style.display = 'inline-block';
        subjectOk = false;
    } else {
        messageValidated.textContent = "";
        subjectOk = true;
    }
}

contactMessage.addEventListener('keyup', validatedMessage);

function enviarForm() {
    if (nameOk === true && emailOk === true && subjectOk === true && messageOk === true) {
        alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

btnSubmit.addEventListener('click', enviarForm);