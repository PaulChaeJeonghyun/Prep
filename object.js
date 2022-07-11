// objects
// one of the JavaScript`s data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of object
//object = {key : value} ;


// 1. Literals and properties
// const name = 'paul';
// const age = 4;
// print (name, age);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
   console.log(person.name);
   console.log(person.age);
}

const paul = {name: 'paul' , age: 4 };
print(paul);


// with JavaScript magic (dynamically typed language)
// can add properties later
paul.hasJob = true;
console.log(paul.hasJob);

delete paul.hasJob;
console.log(paul.hasJob);

// 2. Computed properties
// key should be always string
console.log(paul.name);
console.log(paul['name']);
paul['hasJob'] = true;
console.log(paul.hasJob);

function printValue(obj, key) {
   //console.log(obj.key)
   console.log(obj[key])
}
printValue(paul, 'name');
printValue(paul, 'age');

// 3. Property calue shorthand
const person1 = { name: 'bob', age: 2 }; 
const person2 = { name: 'steve', age: 3 }; 
const person3 = { name: 'dave', age: 4 }; 
const person4 = makePerson('paul', 5);
console.log(person4);

function makePerson(name, age) {
   return {
      name /*:name*/ ,
      age /*:age*/
   }
}

// 4. Constructor Function
function Person(name, age) {
   //this = {};
   this.name = name;
   this.age = age;
   //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in paul);
console.log('age' in paul);
console.log('random' in paul);
console.log(paul.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in paul) {
   console.log(key);
}
//for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
   console.log(value);
}

// for(let i = 0; i < array.length ; i++) {
//    console.log(array[i]);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'paul', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
   user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

