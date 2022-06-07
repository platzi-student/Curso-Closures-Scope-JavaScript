var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
let world = 'Hello'
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();


const helloWorld = () => {
  globalVar = 'im global'
}

helloWorld();
console.log(globalVar)

const anotherFunction = () => {
  var localVar = globalVar = 'Im Global';
}

anotherFunction()
console.log(globalVar);