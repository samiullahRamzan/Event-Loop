//console.log(arguments);
//console.log(require('module').wrapper);

//--------------module.exports
// const C=require('./test-module');
// const calc1=new C();

// console.log(calc1.add(56,3));

//--------------exports
//const calc2=require('./test-module1')
//console.log(calc2.add(56,3));

const {add,multiply,divide }=require('./test-module1');
console.log(add(45,34));

// -------------caching
require('./test-module2')(45,23);
require('./test-module2')(1,2);
require('./test-module2')(3,4);


