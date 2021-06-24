// import functions
import { add, subtract, multiply, divide, modulo, integer, pythagorean, sqfeet } from './calculations.js';
// reference needed DOM elements
// adition
const addXInput = document.getElementById('add-x');
const addYInput = document.getElementById('add-y');
const addAnswer = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', ()=>{
    const addX = Number(addXInput.value);
    const addY = Number(addYInput.value);
    const answer = add(addX, addY);
    console.log(answer);
    addAnswer.textContent = answer;
});
//subtraction
const subXInput = document.getElementById('sub-x');
const subYInput = document.getElementById('sub-y');
const subAnswer = document.getElementById('sub-answer');
const subBtn = document.getElementById('sub-btn');

subBtn.addEventListener('click', ()=>{
    const subX = Number(subXInput.value);
    const subY = Number(subYInput.value);
    const answer = subtract(subX, subY);
    console.log(answer);
    subAnswer.textContent = answer;
});
//multiply
const multiXInput = document.getElementById('multi-x');
const multiYInput = document.getElementById('multi-y');
const multiAnswer = document.getElementById('multi-answer');
const multiBtn = document.getElementById('multi-btn');

multiBtn.addEventListener('click', ()=>{
    const multiX = Number(multiXInput.value);
    const multiY = Number(multiYInput.value);
    const answer = multiply(multiX, multiY);
    console.log(answer);
    multiAnswer.textContent = answer;
});
//divide
const diviXInput = document.getElementById('divi-x');
const diviYInput = document.getElementById('divi-y');
const diviAnswer = document.getElementById('divi-answer');
const diviBtn = document.getElementById('divi-btn');

diviBtn.addEventListener('click', ()=>{
    const diviX = Number(diviXInput.value);
    const diviY = Number(diviYInput.value);
    const answer = divide(diviX, diviY);
    console.log(answer);
    diviAnswer.textContent = answer;
});
//modulo
const moduloXInput = document.getElementById('modulo-x');
const moduloYInput = document.getElementById('modulo-y');
const moduloAnswer = document.getElementById('modulo-answer');
const moduloBtn = document.getElementById('modulo-btn');

moduloBtn.addEventListener('click', ()=>{
    const moduloX = Number(moduloXInput.value);
    const moduloY = Number(moduloYInput.value);
    const answer = modulo(moduloX, moduloY);
    console.log(answer);
    moduloAnswer.textContent = answer;
});
//integer
const intXInput = document.getElementById('int-x');
const intYInput = document.getElementById('int-y');
const intAnswer = document.getElementById('int-answer');
const intBtn = document.getElementById('int-btn');

intBtn.addEventListener('click', ()=>{
    const intX = Number(intXInput.value);
    const intY = Number(intYInput.value);
    const answer = integer(intX, intY);
    console.log(answer);
    intAnswer.textContent = answer;
});
//pythagorean
const pytXInput = document.getElementById('pyt-x');
const pytYInput = document.getElementById('pyt-y');
const pytAnswer = document.getElementById('pyt-answer');
const pytBtn = document.getElementById('pyt-btn');

pytBtn.addEventListener('click', ()=>{
    const pytX = Number(pytXInput.value);
    const pytY = Number(pytYInput.value);
    const answer = pythagorean(pytX, pytY);
    console.log(answer);
    pytAnswer.textContent = answer;
});
//sqFeet
const sqfXInput = document.getElementById('sqf-x');
const sqfYInput = document.getElementById('sqf-y');
const sqfAnswer = document.getElementById('sqf-answer');
const sqfBtn = document.getElementById('sqf-btn');

sqfBtn.addEventListener('click', ()=>{
    const sqfX = Number(sqfXInput.value);
    const sqfY = Number(sqfYInput.value);
    const answer = sqfeet(sqfX, sqfY);
    console.log(answer);
    sqfAnswer.textContent = answer;
});