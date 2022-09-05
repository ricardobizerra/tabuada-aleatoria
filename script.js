var fator1 = document.querySelector('#fator1');
var fator2 = document.querySelector('#fator2');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

fator1.innerHTML = getRandomInt(1, 11);
fator2.innerHTML = getRandomInt(1, 11);
var produtoCliente = document.querySelector('#produto');
var button = document.querySelector('#button');
var correcao = document.querySelector('#correcao');
let produtoServer = (fator1.innerHTML) * (fator2.innerHTML);

function correcaoResultado() {
    if (produtoCliente.value == produtoServer) {
        correcao.innerHTML += `
            <p>Parabéns! Você acertou! :)</p>
            <p>Atualize o site para continuar jogando! &#128074;</p>
        `;
        button.style.display = "none";
        correcao.classList.add('acerto');
    } else {
        correcao.innerHTML += `
            <p>Ah não, você errou :/</p>
            <p>O resultado correto é ${produtoServer}</p>
            <p>Mas não desanime, atualize o site e vamos tentar mais vezes! &#128074;</p>
        `;
        correcao.classList.add('erro');
        button.style.display = "none";
    };
};