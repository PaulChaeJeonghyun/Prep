// 1. Use strict
// added in ES 5
// use this for Vanila JavaScript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'; //global scope
{ //block scope
   let name = 'paul';
   console.log(name);
   name = 'hello';
   console.log(name);
   console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don`t ever use this!)
// var hoisting(move declaration from btm. to top)
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;

// name = 4;
// let name;

// 3. constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const dayInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: primitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// -Security
// -thread safety
// -reduce human mistakes

// 4. Variable types
// primitive, single item: Number, string, boolean, null, undefiened, Symbol
// Object, box container 
// function, first-class function

// C data types for Number
// int main() {
//    short a = 12   // 2 bytes
//    int a = 12;    // 4 bytes
//    long b = 1234;  // 8 bytes
//    float d = 1.2f;   // 4 bytes
//    double e = 8.2;   // 16 bytes
//    return 0;
// }

// Java data types for Number
// class Main {
//       public static void main(String[] args) {
//       byte a = 12;
//       short b = 12;
//       long c = 12;
//       int d = 12;
//       float e = 1.2f;
//       double f = 1.2;
//    }
// }

// JavaScript
// let a = 12;
// let b = 1.2;

// TypeScript
// let a: number = 12;
// let b: number = 1.2;

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don`t use it yet)
//over (-2**53 ~ 2**53)
//add n end of the Number

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log('value: ${greeting}, type: $typeof greeting}');
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. dynamic typing: dynamically typed language  
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// object, rea-life object, data structure
const paul = {name: 'paul', age: 20};
paul.age = 21;