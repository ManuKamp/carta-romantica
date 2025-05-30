const texto = `Meu amor,

Eu amo muito você, quero que você saiba o quanto eres especial para mim, tudo que você faz, se dedica, se mostra, exatamente tudo mesmo... me faz tão bem, você é tão incrível, sou eternamente grata por tê-lo comigo e ter essa oportunidade de te conhecer melhor, te amo muito meu cacheadinho... tenha um bom dia hoje, se cuida, toma bastante água, se agasalhe porque tá muitooo frio, se cuida!!! eu te amooo`;

let i = 0;
let cartaAberta = false;

function abrirCarta() {
  const carta = document.getElementById('carta');
  const textoElemento = document.getElementById('textoDigitado');

  if (!cartaAberta) {
    carta.classList.add('aberta');
    cartaAberta = true;

    const interval = setInterval(() => {
      if (i < texto.length) {
        textoElemento.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        textoElemento.classList.remove('digitando');
      }
    }, 35);
  }
}