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

let enigmeAnswer;
let number = 3;
let enigmeEnded = 0;

// enigmeData contient les données JSON
let hintText0 = enigmeData[0].hint;
// Séparer chaque lettre et son équivalent en minuscule et majuscule
let letters = hintText0.match(/[A-Za-z]/g);
// Convertir les lettres en minuscules et majuscules
letters = letters.map((letter) => letter.toLowerCase());

if (!enigmeEnded) {
  switch (number) {
    case 1:
      enigmeNumber.textContent = setEnigmeNumber(number);
      setEnigme();
      enigmeButton.addEventListener("click", function () {
        console.log(enigmeAnswer);
      });
      break;
    case 2:
      enigmeNumber.textContent = setEnigmeNumber(number);
      setEnigme();
      break;
    case 3:
      enigmeNumber.textContent = setEnigmeNumber(number);
      setEnigme();
      break;
  }
} else {
  console.log("Fin de l'enigme");
}

// FUNCTIONS
function fontToWakanda() {
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
  } else if (number == 3) {
    enigmeContent;
  } else {
    enigmeHint.textContent = hint;
  }
}
