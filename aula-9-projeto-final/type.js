
  function digitarFrase(frase, elemento, repetir = false) {
    let i = 0;
    const intervalo = setInterval(() => {
      if (i < frase.length) {
        elemento.innerHTML += frase.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        if (repetir) {
          setTimeout(() => {
            elemento.innerHTML = "";
            i = 0;
            digitarFrase(frase, elemento, true);
          }, 1000);
        }
      }
    }, 50);
  }
  //codigo acima foi baseado em:
 //https://github.com/mattboldt/typed.js/
 //https://codepen.io/ReneSena/pen/VdXpXO