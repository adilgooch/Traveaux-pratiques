function calculate(a, b, op) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/" && b !== 0) {
    return a / b;
  } else {
    return null;
  }
}

// Calcul avec deux nombres
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const res = document.getElementById("res");
const opButtons = document.querySelectorAll(".operation-button");

opButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (n1.value === "" || n2.value === "") {
      res.textContent = "Entrez les deux nombres.";
      return;
    }

    const answer = calculate(
      Number(n1.value),
      Number(n2.value),
      button.dataset.operation
    );

    if (answer === null) {
      res.textContent = "Division par zéro impossible.";
    } else {
      res.textContent = "Résultat : " + answer;
    }
  });
});

// Calculatrice à boutons
const screen = document.getElementById("screen");
const keys = document.querySelectorAll(".calculator-keys button");

let first = null;
let op = "";
let waiting = false;

function addDigit(digit) {
  if (waiting || screen.value === "Erreur") {
    screen.value = digit;
    waiting = false;
  } else {
    screen.value = screen.value + digit;
  }
}

function showAnswer() {
  if (first === null || op === "" || waiting) {
    return;
  }

  const answer = calculate(first, Number(screen.value), op);

  if (answer === null) {
    screen.value = "Erreur";
  } else {
    screen.value = answer;
  }

  first = null;
  op = "";
  waiting = true;
}

keys.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.dataset.number !== undefined) {
      addDigit(button.dataset.number);
    } else if (button.dataset.operator !== undefined) {
      if (screen.value === "" || screen.value === "Erreur") {
        return;
      }

      first = Number(screen.value);
      op = button.dataset.operator;
      waiting = true;
    } else if (button.dataset.action === "decimal") {
      if (waiting || screen.value === "") {
        screen.value = "0.";
        waiting = false;
      } else if (!screen.value.includes(".")) {
        screen.value = screen.value + ".";
      }
    } else if (button.dataset.action === "clear") {
      screen.value = "";
      first = null;
      op = "";
      waiting = false;
    } else if (button.dataset.action === "backspace") {
      if (!waiting) {
        screen.value = screen.value.slice(0, -1);
      }
    } else if (button.dataset.action === "equals") {
      showAnswer();
    }
  });
});

// Carrousel d’images...
const photos = [
  {
    source: "https://picsum.photos/id/1015/700/350",
    description: "Paysage de montagne"
  },
  {
    source: "https://picsum.photos/id/1018/700/350",
    description: "Un autre paysage"
  },
  {
    source: "https://picsum.photos/id/1025/700/350",
    description: "Un chien"
  }
];

const pic = document.getElementById("pic");
const caption = document.getElementById("caption");
let photoNumber = 0;

function showPhoto() {
  pic.src = photos[photoNumber].source;
  pic.alt = photos[photoNumber].description;
  caption.textContent = photos[photoNumber].description;
}

document.getElementById("next").addEventListener("click", function () {
  photoNumber = photoNumber + 1;

  if (photoNumber >= photos.length) {
    photoNumber = 0;
  }

  showPhoto();
});

document.getElementById("prev").addEventListener("click", function () {
  photoNumber = photoNumber - 1;

  if (photoNumber < 0) {
    photoNumber = photos.length - 1;
  }

  showPhoto();
});

showPhoto();

// Menu déroulant...
const drop = document.getElementById("drop");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
  const isOpen = drop.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});