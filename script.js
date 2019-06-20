const domElements = {
  buttonRun: document.querySelector('.run'),
  buttonClear: document.querySelector('.clear'),
  div: document.querySelector('div')
}

const codes = 'abcdefghijklmnoprstuvwxyz0123456789';
const codesLength = 30;
const codesNuber = 25;
let allCodes = [];

domElements.buttonClear.addEventListener('click', () => {
  domElements.div.textContent = '';
})

domElements.buttonRun.addEventListener('click', () => {
  domElements.div.textContent = '';
  allCodes = generateCodes();
  displayAllCodes(allCodes);
})

const displayAllCodes = (allCodes) => {
  allCodes.forEach(element => {
    const pElement = document.createElement('p');
    pElement.textContent = element;
    domElements.div.appendChild(pElement);
  });
}

const generateCodes = () => {
  let allCodes = [];
  for (let i = 0; i < codesNuber; i++) {
    let code = '';

    for (let j = 0; j < codesLength; j++) {
      code += codes[Math.floor(Math.random() * codes.length)].toUpperCase();
    }
    allCodes.push(code);
  }

  return allCodes;
}