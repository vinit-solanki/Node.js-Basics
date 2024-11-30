// Importing and destructuring the module exported from export_module.js
// import { add, subtract, multi } from './export_module.js';
const {add, sub, multi} = require('./03_export_module.js');
// Using the imported functions
console.log(add(5,10)); // Outputs: 15
console.log(sub(10,5)); // Outputs: 5
console.log(multi(5,10)); //Output: 50
