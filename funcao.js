var imagens =["imagens/batman.jpg", "imagens/spiderman.jpg", "imagens/doutor-estranho.webp", "imagens/Vingadores-Ultimato.jpg", "imagens/velosesefuriosos.jpg", "imagens/jujutsu-kaisen-0-plano-critico.jpg"]
var imagemAtual = 0;

function trocarImagem() {
    imagemAtual = (imagemAtual + 1) % 6;
    document.querySelector('.gif img').src = imagens [imagemAtual];
}

setInterval (trocarImagem, 3000)