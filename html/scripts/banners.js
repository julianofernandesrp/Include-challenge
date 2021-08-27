var imagens = ["imagens/banner1.jpg", "imagens/banner2.jpg", "imagens/banner3.jpg"];
var imagemAtual = 0

function trocar(){
	imagemAtual = (imagemAtual + 1) % 3;
	document.querySelector('.banner img').src= imagens[imagemAtual];

}

setInterval(trocar, 1500)