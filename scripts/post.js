function visualizarPost() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const idUrl = params.get("id");

  const postsNoLocalStorage = JSON.parse(localStorage.getItem("posts"));
  const post = postsNoLocalStorage.find((item) => item.id == idUrl);

  if (post == undefined) {
    window.location.href = "404.html";
  } else {
    const campo = document.getElementById("campo");

    const tituloPost = document.createElement("h2");
    tituloPost.classList.add("campo-title");
    tituloPost.innerText = post.titulo;
    campo.appendChild(tituloPost);

    const fotoPost = document.createElement("img");
    fotoPost.classList.add("campo-img");
    fotoPost.setAttribute("src", post.foto);
    campo.appendChild(fotoPost);

    hr1 = document.createElement("hr");
    hr1.style.border = "1px solid ligthgrey";
    hr1.style.margin = "40px 0";
    campo.appendChild(hr1);

    const textoP = document.createElement("p");
    textoP.classList.add("texto-p");
    textoP.innerText = post.descricao;
    campo.appendChild(textoP);

    hr2 = document.createElement("hr");
    hr2.style.border = "1px solid ligthgrey";
    hr2.style.margin = "40px 0";
    campo.appendChild(hr2);

    const campoData = document.createElement("h4")
    campoData.classList.add("campo-data")
    campoData.innerText = "Criado em: " + post.data
    campo.appendChild(campoData);
  }
}

document.addEventListener("DOMContentLoaded", visualizarPost);
