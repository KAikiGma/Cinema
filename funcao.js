var imagens =["imagens/batman.jpg", "imagens/spiderman.jpg", "imagens/doutor-estranho.webp", "imagens/Vingadores-Ultimato.jpg", "imagens/velosesefuriosos.jpg"]
var imagemAtual = 0;

function trocarImagem() {
    imagemAtual = (imagemAtual + 1) % 5;
    document.querySelector('.gif img').src = imagens [imagemAtual];
}

setInterval (trocarImagem, 3000)