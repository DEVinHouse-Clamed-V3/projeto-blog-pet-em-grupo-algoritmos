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

    if (biografia === "") {
        document.getElementById('biografia').style.borderColor = "#780000"
        document.getElementById('biografia').style.borderWidth = "2px"
        document.getElementById('erro-biografia').innerText = "Biografia é obrigatória"
    } else {
        document.getElementById('biografia').style.borderColor = ""
        document.getElementById('biografia').style.borderWidth = ""
        document.getElementById('erro-biografia').innerText = ""
    }

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

        const imagem = document.getElementById('visualizacao-url');
        imagem.src = '';
        imagem.classList.remove('imagem-neon');
        document.getElementById('form-post').reset()
    }

}

document
    .getElementById('form-post')
    .addEventListener('submit', cadastro)

    function adicionarImagem() {
        const url = document.getElementById('foto').value;
        const imagem = document.getElementById('visualizacao-url');
    
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