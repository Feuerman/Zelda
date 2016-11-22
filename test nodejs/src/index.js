import arrClass from './app';

const arr = ['1', '2', '4', '8', '1', '3', '7', '9', '1'];

const arrObj = new arrClass(arr);

var func = arrObj.deleteString('1');
var data = arrObj.getData();

console.log(func);
console.log(data);

