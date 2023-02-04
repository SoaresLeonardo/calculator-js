const display = document.querySelector(".display");
let click;
function insert(valor) {
  display.value += valor;
}

function button() {
  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("btn-ce")) {
      clear();
    }
    if (el.classList.contains("btn-c")) {
      dell();
    }
    if (el.classList.contains("btn-result")) {
      equal();
    }
    if (el.classList.contains("moreOrLess")) {
      trocaSinal();
    }
  });
}

function clear() {
  display.value = "";
}

function trocaSinal() {
  if (Number(display.value)) {
    display.value = display.value * -1;
  }
}

function dell() {
  display.value = display.value.slice(0, -1);
}

function equal() {
  let equal = display;
  try {
    if (!equal.value) {
      alert("Error");
      return;
    }
    equal.value = eval(equal.value);
  } catch {
    alert("Error");
    display.value = "";
  }
}

button();
