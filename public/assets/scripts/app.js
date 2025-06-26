const baseUrl = "http://localhost:3000"; // Base URL para o JSONServer
// Este script pode ser usado para carregar detalhes de uma notícia específica
// na página de detalhes (detalhes.html)
if (window.location.pathname.includes("detalhes.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  if (id) {
    fetch(`${baseUrl}/noticias/${id}`) // Busca notícia específica
      .then(response => response.json())
      .then(noticia => {
        // Preenche os elementos na página detalhes.html
        document.getElementById("titulo-noticia").textContent = noticia.titulo;
        document.getElementById("data-publicacao").textContent = `Publicado em ${noticia.data}`; // Adicione 'data' ao seu JSON
        document.getElementById("imagem-noticia").src = noticia.imagem;
        document.getElementById("conteudo-noticia").innerHTML = noticia.conteudo; // Adicione 'conteudo' ao seu JSON
      })
      .catch(err => console.error("Erro ao carregar detalhes da notícia:", err));
  }
}