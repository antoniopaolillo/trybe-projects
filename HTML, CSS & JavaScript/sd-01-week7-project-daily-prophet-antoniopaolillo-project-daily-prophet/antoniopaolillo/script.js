function aumentaTamanhoDosArtigos() {
    let artigos = document.getElementsByTagName("article");

    for (let i = 0; i < artigos.length; i++) {
        let artigo = document.getElementsByTagName("article")[i];
        artigo.addEventListener("click", function () {
            artigo.classList.add("aumentarTamanhoArtigo");
            setTimeout(function () {
                artigo.classList.remove("aumentarTamanhoArtigo");
            }, 4000);
        })
    }
}
aumentaTamanhoDosArtigos();

function ativarAnuncio() {
    let vassoura = document.getElementById("vassouraAnuncio");
    vassoura.addEventListener("click", function () {
        vassoura.classList.add("vassouraAnuncioAdicionar");
        setTimeout(function () {
            vassoura.classList.remove("vassouraAnuncioAdicionar");
        }, 10000);
    })
}
ativarAnuncio();
