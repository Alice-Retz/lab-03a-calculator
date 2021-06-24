// import functions
import { add } from './calculations.js';
// reference needed DOM elements
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswer = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
addBtn.addEventListener('click', ()=>{
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    console.log(answer);
    addAnswer.textContent = answer;
});