/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const errors = require("./src/errors");

try {
  errors.standardErr.range();
}
catch (err) {
  console.log("Ha ocurrido un error: ", err);
}

console.log('final');
