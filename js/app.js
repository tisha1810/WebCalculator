const display = document.getElementById('display');

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/', '.'].includes(value) && ['+', '-', '*', '/', '.'].includes(lastChar)) {
    return;
  }
  display.value += value;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(display.value.replace('%', '/100')); // Обробка оператора %

    if (result === Infinity || result === -Infinity) {
      display.value = 'Arithmetic error!';
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = 'Arithmetic error!';
  }
}
