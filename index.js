/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const call = require("./src/call");

// console.log(call.sync('Jose Daniel'));
// call.withCallback('Emilio Rojas', call.sync);

call.withPromise("Emilio Rojas")
  .then(name => { console.log(name) });
