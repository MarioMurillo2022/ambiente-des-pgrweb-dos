var colors = require('colors');

let comparacion;
let a = 5;
let b = '5';

if (comparacion) {
    console.log(colors.green(a == b));
} else {
    console.log(colors.red(a === b));
}
