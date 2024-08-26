document.addEventListener("DOMContentLoaded", carregarDadosNaTela);

function carregarDadosNaTela() {
    console.log("carregandoDados")

    const pegarPost = JSON.parse(localStorage.getItem("posts")) || []

    const artigos = document.getElementById("artigos")

    artigos.innerHTML = ""

    pegarPost.forEach(post => {
        const article = document.createElement("article")
        article.classList.add("card")

        const divTitle = document.createElement("div")
        const img = document.createElement("img")
        img.classList.add("img")
        img.src = post.foto

        const pcategoria = document.createElement("p")
        pcategoria.classList.add("categoria")
        pcategoria.textContent = post.categoria

        divTitle.append(img, pcategoria)

        article.append(divTitle)

        const divH2 = document.createElement("div")
        const h2 = document.createElement("h2")
        h2.classList.add("h2")
        h2.textContent = post.titulo

        divH2.append(h2)

        article.append(divH2)

        const divP = document.createElement("div")
        const pDate = document.createElement("p")
        pDate.classList.add("data")
        pDate.textContent = post.dataCriacao

        const pTempo = document.createElement("p")
        pTempo.classList.add("tempo")
        pTempo.textContent = calculoTempoLeitura(post.descricao) + " min de leitura"

        divP.append(pDate, pTempo)

        article.append(divP)

        artigos.append(article)

        article.addEventListener("dblclick", () => {
            verPost(post.id);
        })

    })
}

function calculoTempoLeitura(texto) {
    const palavras = texto.split(' ');
    const tempo = Math.ceil(palavras.length / 200);
    return tempo;
}

function verPost(id) {
    window.location.href = post.html ? id = ${ id };
}
