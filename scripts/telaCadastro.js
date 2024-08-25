function togglePassword() {
    const passwordField = document.getElementById("senha");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

function cadastro(event) {

    event.preventDefault()

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confirmarSenha = document.getElementById('confirmarSenha').value
    const biografia = document.getElementById('biografia').value

    if (senha !== confirmarSenha) {
        document.getElementById('erro-senha').innerText = "As senhas não conferem!"
    } else { document.getElementById('erro-senha').innerText = "" }

    if (nome && foto && email && senha && biografia) {
        const post = {
            id: Date.now(),
            foto: foto,
            nome: nome,
            email: email,
            senha: senha,
            biografia: biografia,
        }

        let listaNoLocalStorage = JSON.parse(localStorage.getItem("cadastro"))

        if (listaNoLocalStorage === null) listaNoLocalStorage = []

        listaNoLocalStorage.push(post)

        localStorage.setItem("cadastro", JSON.stringify(listaNoLocalStorage))

        document.getElementById('form-post').reset()

    }

}

document
    .getElementById('form-post')
    .addEventListener('submit', cadastro)

function adicionarImagem() {
    var url = document.getElementById('foto').value;
    var imagem = document.getElementById('visualizacao-url');

    if (url) {
        imagem.src = url;

        imagem.classList.remove('imagem-neon');

        imagem.onload = function () {
            imagem.classList.add('imagem-neon');
        };

        imagem.onerror = function () {
            imagem.classList.remove('imagem-neon');
            imagem.src = '';
        };
    } else {
        imagem.src = '';
        imagem.classList.remove('imagem-neon');
    }
}

document.getElementById('foto').addEventListener('input', adicionarImagem);