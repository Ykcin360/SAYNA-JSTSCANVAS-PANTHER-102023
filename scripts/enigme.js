const enigmeData = [
  {
    state:
      "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !",
    enigme: "si je suis fidele c'est a ce trone peu importe qui monte dessus",
    answer: "si je suis fidele c'est a ce trone peu importe qui monte dessus",
    subHint: "Voici la transcription de l’alphabet:",
    hint: "A = a ; B = b ; C = c ; D = d ; E = e ; F = f ; G = g ; H = h ; I = i ; J = j ; K = k ; L = l ; M = m ; N = n ; O = o ; P = p ; Q = q ; R = r ; S = s ; T = t ; U = u ; W = w ; X = x ; Y = y ; Z = z",
  },
  {
    state:
      "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    enigme:
      "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    answer:
      "Le film debute a Oackland en Californie. Il sagit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers",
    subHint: "Le savais tu ?",
    hint: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?",
  },
  {
    state:
      "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    enigme:
      "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    answer: "le roi lion",
    subHint: "Le savais tu ?",
    hint: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.",
  },
];

const enigmeNumber = document.querySelector(".enigme-number");
const enigmeState = document.querySelector(".enigme-state");
const enigmeContent = document.querySelector(".enigme-content");
const enigmeSubHint = document.querySelector(".enigme-sub-hint");
const enigmeButton = document.querySelector(".enigme-btn");
const enigmeHint = document.querySelector(".enigme-hint");
const userResponse = document.querySelector(".user-response");
const enigmeModal = document.querySelector(".modal-enigme");
const enigmeTitleModal = document.querySelector(".modal-title-enigme");
const enigmeModalButton = document.querySelector(".modal-btn-enigme");
const soonBox = document.querySelector(".soon");
const tryCount = document.querySelector(".try");

const targetDate = new Date("2023-10-25T00:00:01").getTime();
let enigmeAnswer;
let number = 1;
let score = 0;
let enigmeTry = 10;
let enigmeEnded = 0;

tryCount.textContent = enigmeTry;

// enigmeData contient les données JSON
let hintText0 = enigmeData[0].hint;
// Séparer chaque lettre et son équivalent en minuscule et majuscule
let letters = hintText0.match(/[A-Za-z]/g);
// Convertir les lettres en minuscules et majuscules
letters = letters.map((letter) => letter.toLowerCase());

if (!enigmeEnded) {
  switch (number) {
    case 1:
      setEnigme();
      enigmeButton.addEventListener("click", function () {
        if (checkAnswer(userResponse)) {
          setEnigme();
        } else {
          decreaseTry();
        }
      });
      break;
    case 2:
      setEnigme();
      enigmeButton.addEventListener("click", function () {
        if (checkAnswer(userResponse)) {
          setEnigme();
        } else {
          decreaseTry();
        }
      });
      break;
    case 3:
      setEnigme();
      enigmeButton.addEventListener("click", function () {
        if (checkAnswer(userResponse)) {
          endEnigme();
        } else {
          decreaseTry();
        }
      });
      break;
  }
}

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calcul des heures, minutes et secondes restantes
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Mettez à jour l'élément HTML avec le temps restant
  const countdownElement = document.querySelector(".count");
  countdownElement.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;

  // Si le compte à rebours est terminé
  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "00:00:00";
    // Faites quelque chose lorsque le compte à rebours est terminé
    // par exemple, redirigez l'utilisateur ou affichez un message
    enigmeModalButton.textContent = "IT'S TIME";
  }
}, 1000);

// Fonction pour formater le temps avec un zéro en cas de chiffre unique
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// FUNCTIONS
function fontToWakanda() {
  enigmeHint.textContent = "";
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const container = document.createElement("div");
    const stylizeLetter = document.createElement("span");
    container.textContent = `${letter} = `;
    stylizeLetter.textContent = `${letter}; `;
    stylizeLetter.classList.add("font-wakanda");
    container.appendChild(stylizeLetter);
    enigmeHint.appendChild(container);
    enigmeHint.style.textTransform = "uppercase";
  }
}

function setEnigmeNumber(n) {
  let enigmeN;
  enigmeN = n.toString();
  return enigmeN;
}

function setEnigme() {
  enigmeNumber.textContent = setEnigmeNumber(number);

  // enigmeData contient les données JSON
  let state = enigmeData[number - 1].state;
  let enigme = enigmeData[number - 1].enigme;
  let answer = enigmeData[number - 1].answer;
  let subHint = enigmeData[number - 1].subHint;
  let hint = enigmeData[number - 1].hint;

  enigmeState.textContent = state;
  enigmeContent.textContent = enigme;
  enigmeAnswer = answer;
  enigmeSubHint.textContent = subHint;

  if (number == 1) {
    enigmeContent.classList.add("font-wakanda");
    fontToWakanda();
  } else if (number == 2) {
    enigmeContent.style.fontFamily = "cantarell";
    enigmeContent.style.textTransform = "initial";
    enigmeContent.style.letterSpacing = "0.1em";
    enigmeContent.style.fontSize = "1em";
    enigmeSubHint.style.textAlign = "center";
    enigmeHint.textContent = hint;
    enigmeHint.style.textTransform = "initial";
  } else if (number == 3) {
    enigmeContent.style.wordSpacing = "2em";
    enigmeSubHint.style.textAlign = "center";
    enigmeHint.textContent = hint;
  }
}

function checkAnswer(r) {
  console.log(r.value);
  if (r.value.toLowerCase() === enigmeAnswer.toLowerCase()) {
    if (number == 3) {
      endEnigme();
    } else {
      number++;
    }
    score++;
    r.value = "";
    return true;
  }
}

function decreaseTry() {
  userResponse.value = "";
  enigmeTry--;
  tryCount.textContent = enigmeTry;
  if (enigmeTry <= 0) {
    endEnigme();
  }
}

function endEnigme() {
  enigmeModal.style.display = "block";
  if (enigmeTry > 0) {
    enigmeTitleModal.textContent = "ton initiation est terminée !";
    enigmeModalButton.textContent = "Revenir à l'accueil";
    enigmeModalButton.href = "index.html";
  } else {
    enigmeTitleModal.textContent = "vous n'êtes pas encore prêt...";
    enigmeModalButton.textContent = "Réessayer";
    soonBox.style.display = "none";
    enigmeModalButton.href = "enigme.html";
  }
}
