document.addEventListener("DOMContentLoaded", carregarDadosNaTela);

function carregarDadosNaTela() {
    console.log("carregandoDados")
    const pegarPost = JSON.parse(localStorage.getItem("posts")) || []
    const artigos = document.getElementById("artigos")
    artigos.innerHTML = ""

    pegarPost.forEach(post => {
        const article = document.createElement("article")

    article.classList.add("card")
    })
}




