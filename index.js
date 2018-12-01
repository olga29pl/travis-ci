const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');
const process = require('process');
const readline = require('readline');
 
const argv  = process.argv.slice(2).map(el => parseInt(el));
console.log(task1.countNumbers(argv));
console.log(task2.squareNumbers(argv));

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a sequence of natural numbers ", (answer) => {
  const argv = answer.split(' ').map(el => parseInt(el));
  console.log(task1.countNumbers(argv));
  console.log(task2.squareNumbers(argv));
  rl.close();
});