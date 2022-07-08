// Function
// -fundamental building block in the program
// -subprogram can be used muiltiple times
// -perfoems a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object inn JS
function printHello() {
   console.log('Hello');
}
printHello();

function log(message) {
   console.log(message);
}
log('Hello!');
log(1234);

//go to typescript website - playground

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
   obj.name = 'coder';
}
const paul = { name: 'paul' };
changeName(paul);
console.log(paul);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
   console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// old ver.
//function showMessage(message, from) {
//   if (from === undefined) {
//      from = 'unknown';
//   }
//   console.log(`${message} by ${from}`);
// }
// showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
   for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
   }

   for (const arg of args) {
      console.log(arg);
   }

   args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'paul');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
   let message = 'hello';
   console.log(message); // local variable
   console.log(globalMessage);
   function printAnother() {
      console.log(message);
      let childMessage = 'hello';
   }
}
printMessage();
//console.log(message);
//console.log(childMessage); //error

// 6. Return a value
function sum(a, b) {
   return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
   if (user.point > 10) {
      //long upgrade logic...
   }
}

// good
function upgradeUser(user) {
   if (user.point <= 10) {
      return;
   }
   //long upgrade logic...
}

