// Dichiarazione del container dove verrà generato il gioco
const contain = document.getElementById('contain');

// Dichiarazione del container per il game over
const gameOver = document.getElementById('loseContain');

// Dichiarazione del container per la win
const winGame = document.getElementById('winContain');

// Dichiarazione della difficoltà
const difficulty = document.getElementById('difficulty');

// Dichiarazione del bottone che Inizierà la partita
const playBtn = document.getElementById('play');

// Dichiarazione dei blocchi in base alla scelta dell'utente
let nSquares;


// Assemblaggio del gioco vero e proprio
playBtn.addEventListener('click', function () {
  // Gli facciamo leggere cosa ha scelto l'utente
  let diffChoose = difficulty.value;
  // In base a cosa ha scelta genererà i blocchi (squares)
  let squares = gridDifficulty(diffChoose);



  // Creazione griglia tramite funzione
  gridLayout(squares);
})

// Funzione per scegliere che griglia generare
function gridDifficulty(optionSelected) {

  /* selezionando le difficoltà:
  - Genererà nSquares blocchi
  - Assegnandoli una larghezza di Npx
  - Restituendomi N blocchi */
  if (optionSelected == 1) {
    nSquares = 100;
    contain.style.width = '1000px';
    return nSquares;
  } else if (optionSelected == 2) {
    nSquares = 81;
    contain.style.width = '900px';
    return nSquares;
  } else {
    nSquares = 49;
    contain.style.width = '700px';
    return nSquares;
  }
}

// Funzione che genera effettivamente la griglia di gioco
function gridLayout(blocksNumbers) {
  contain.innerHTML = ''
  gameOver.innerHTML = ''

  // Generazione randomica della posizione delle bombe
  let bombs = genBombs(nSquares);
  console.log(bombs);

  const winCounter = safeSquares(blocksNumbers, bombs.length)
  console.log(winCounter);

  for (let n = 1; n <= blocksNumbers; n++) {
    const blockEl = document.createElement('div');
    blockEl.classList.add('square', 'purple');
    blockEl.innerHTML = n;
    contain.append(blockEl);

    blockEl.addEventListener('click', function () {
      const keySelected = Number(blockEl.innerText);

      const keyBomb = isBomb(bombs, keySelected);


      if (keyBomb) {
        /* blockEl.classList.remove('purple')
        blockEl.classList.add('crimson') */

        //Game over del gioco
        //svuotare la griglia
        contain.innerHTML = ""

        //creare un contenitore dove mettere la scritta che enuncia la sconfitta e aggiungo lo stile al contenitore
        const loseContainer = document.createElement('div');
        loseContainer.classList.add('loseContainer');

        // Inserisco nell'HTML il mio contenitore che enuncia la sconfitta 
        gameOver.append(loseContainer)

        // La scritta effettiva che ti dice che hai perso
        loseContainer.innerHTML = `
        <h1>You hitted a <span>Bomb</span>! Try again! <span>Click</span> again on button for <span>Start</span> new Game</h1>
        `
      } else { // Se clicchi i quadrati senza le bombe, il quadratino diventa verde tramite la classe "selected"
        blockEl.classList.remove('purple')
        blockEl.classList.add('selected')
      }

    })
  }

}

// Funzione per generare numeri casuali (posizione bombe)
function randomNumbers(min, max) {
  return Math.floor(Math.random(min) * (max - min) + 1) + 1;
}

//creazione dell'array che conterrà le bombe
function genBombs(blocksNumbers) {
  // Creazione array vuota, da riempire con il ciclo
  const bombs = []

  // Ciclo per riempire l'array soprastante
  while (bombs.length < 16) {
    const bomb = randomNumbers(1, blocksNumbers);

    if (!bombs.includes(bomb)) {
      bombs.push(bomb);
    }
  }
  return bombs;
}

function isBomb(bombs, diValue) {
  if (bombs.includes(diValue)) {
    return true;
  } else {
    return false;
  }
}

function safeSquares(blocksNumbers, nBombs) {
  return safe = blocksNumbers - nBombs;
}




/* blocco in caso di vincita {
        // Win del gioco
        // svuotare la griglia
        contain.innerHTML = ""

        // creare un contenitore dove mettere la scritta che enuncia la sconfitta e aggiungo lo stile al contenitore
        const winContainer = document.createElement('div');
        winContainer.classList.add('loseContainer');

        // Inserisco nell'HTML il mio contenitore che enuncia la sconfitta
        winGame.append(winContainer)

        // La scritta effettiva che ti dice che hai perso
        winContainer.innerHTML = `
        <h1>You complete the <span class="winText">Game!</span></h1>
        `
      } */