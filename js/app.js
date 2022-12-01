const lowerCount = document.querySelector(".prevBtn");
const addCount = document.querySelector(".nextBtn");
const counter = document.querySelector("#counter");

let count = counter.innerHTML;

function addCounter() {
  count++;
  counter.innerHTML = count;

  if (count > 0) {
    counter.style.color = 'green';
  }
  else if (count === 0) {
    counter.style.color = 'black';
  }
}

function lowerCounter() {
  count--;
  counter.innerHTML = count;
  
  if(count < 0) {
    counter.style.color = 'red';
  }
  else if (count === 0) {
    counter.style.color = 'black';
  }
}

addCount.addEventListener('click', addCounter);
lowerCount.addEventListener('click', lowerCounter);







































/*

(function(){
  const buttons = document.querySelectorAll('.counterBtn')
  let count= 0


  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('prevBtn')){
        count--
      } else if (button.classList.contains('nextBtn')){
        count++
      }

      //Select the counter text
      const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count < 0 ){
        counter.style.color = 'red'
      } else if (count > 0){
        counter.style.color = 'green'
      } else {
        counter.style.color = '#333333'
      }
    })
  })
})()
*/