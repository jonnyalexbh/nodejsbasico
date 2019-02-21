/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const greet = require("./src/greet");

// greet.emit('clap');
// greet.emit('shout', 'VIVA LA WEB');

greet.emit('call', 'jonnyalexbh', (name) => {
  console.log("Estamos llamando a: ", name);
})
