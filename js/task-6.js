const controls = document.querySelector('#controls');
const boxesDiv = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

let boxesAmount = 0;

createButton.addEventListener('click', () => {
  const userAmount = +input.value;
  if (userAmount >= 1 && userAmount <= 100) {
    boxesAmount = userAmount;
    createBoxes(boxesAmount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const square = document.createElement('div');
    square.style.width = `${30 + i * 10}px`;
    square.style.height = `${30 + i * 10}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxesFragment.appendChild(square);
  }

  boxesDiv.appendChild(boxesFragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = ''; 
}