const btn = document.querySelector('button');
const input = document.querySelector('#textBox');
const toFahreheit = document.querySelector('#toFahreheit');
const toCelsius = document.querySelector('#toCelsius');
const result = document.querySelector('#result');
let temp;

btn.addEventListener('click' , function() {

  if(toFahreheit.checked){
    temp = Number(input.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = `${temp.toFixed(1)}°F`;
  }
  else if(toCelsius.checked){
    temp = Number(input.value);
    temp = (temp - 32) * (5/9);
    result.textContent = `${temp.toFixed(1)}°C`;
  }
  else{
    result.textContent = "Select a unit!"
  }

});

