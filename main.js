/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */


/* Dichiarazione del bottone per la difficoltà facile */
const easyBtn = document.getElementById('easy')

/* Dichiarazione del bottone per la difficoltà media */
const mediumBtn = document.getElementById('medium')

/* Dichiarazione del bottone per la difficoltà difficile */
const hardBtn = document.getElementById('hard')

let nSquares;

/* const bombs = positionBombs(nSquares); */

/* Dichiarazione degli eventi che genereranno i quadratini in base al bottone che verrà premuto */
easyBtn.addEventListener('click', function () {
  nSquares = 100;

  contain.className = 'easyWidth'

  generate(nSquares);

})

mediumBtn.addEventListener('click', function () {
  nSquares = 81;

  contain.className = 'mediumWidth'

  generate(nSquares);

})

hardBtn.addEventListener('click', function () {
  nSquares = 49;

  contain.className = 'hardWidth';

  generate(nSquares);

})

/* Funzione creata per generare N quadratini in base alla difficoltà che l'utente sceglie di giocare */
function generate(quadratini) {

  contain.innerHTML = "";

  for (let i = 1; i <= quadratini; i++) {

    /* Dichiarazione del contenitore dove verranno stampati i quadratini per il gioco */
    const contain = document.getElementById('contain');


    /* creazione del quadrato */
    let square = document.createElement('div');

    /* Aggiunta delle classi per definire lo stile dei quadrati */
    square.classList.add('purple', 'square')

    /* Attacco del quadrato al contenitore padre */
    contain.append(square);

    /* Immissione del numero corrispondente al quadrato */
    square.innerHTML += i

    /* Aggiunta dell'evento al click dei quadrati per :
    - il primo if : aggiungere la classe "selected" e rimuovere la classe originale del background
    - il secondo if : rimuovere la classe "selected" e aggiungere di nuovo la classe originale per il background */
    square.addEventListener('click', function () {

      if (square.classList.contains('purple')) {
        square.classList.remove('purple');
        square.classList.add('selected');
      } else if (square.classList.contains('selected')) {
        square.classList.remove('selected');
        square.classList.add('purple');
      }
    })
  }
}

/* Generazione di un numero random */
function genRandomNumber(min, max) {
  return randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;
}

/* creazione di un array con all'interno dei numeri casuali generati dalla funzione di prima */
function positionBombs(quadratini) {
  const bombs = []
  console.log(quadratini);


  while (bombs.length < 16) {
    const bomb = genRandomNumber(1, quadratini);

    /* se la bomba è inclusa nell'array decrementa l'indice per generare un altro numero */
    if (!bombs.includes(bomb)) {
      console.log('Add a bomb');
      bombs.push(bomb)
    }
  }
  console.log(bombs);
  return bombs;
}