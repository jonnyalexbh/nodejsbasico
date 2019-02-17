/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const call = require("./src/call");

// call.greet('jonnyalexbh');

async function callWithPromise() {
  const fullName = await call.withPromise('Jonny', 'Lopez')
  console.log(fullName);
}

callWithPromise()

// call.withPromise('Jonny', 'Lopez')
//   .then(n => console.log(n));
