particlesJS.load('particles-js', 'particles.json');

let container = document.querySelector("#container");
let userInput = document.querySelector("#userInput");
let submitInput = document.querySelector("#submit-value");

const multiplyByInput = () => {
  let list = document.querySelector("#lists");
  while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
  }

  let x = 0;
  while (x <= 12) {
    let list = document.querySelector("#lists");
    let listItem = document.createElement("li");    
    list.appendChild(listItem);
    listItem.innerHTML = `${userInput.value} x ${x} = ${x * userInput.value}`;
  x++;
  }
}

submitInput.addEventListener('click', multiplyByInput, false);



