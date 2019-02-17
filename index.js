/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const fs = require("fs");
const ops = require("./src/fileops");

let incValue;
let greeting;

fs.readFile("./resources/number.txt", "utf8", (err, text) => {
  if (err) throw err;
  const numbers = text.split("\n").map(n => Number(n));
  incValue = ops.incrementValues(numbers)

  fs.writeFile("./resources/numberNew.txt", incValue.join("\n"), (err, result) => {
    if (err) throw err;
  })

});


fs.readFile("./resources/name.txt", "utf8", (err, data) => {
  if (err) throw err;
  const names = data.split("\n").map(n => n);
  greeting = ops.callNames(names)

  fs.writeFile("./resources/greetingNew.txt", greeting.join("\n"), (err, result) => {
    if (err) throw err;
  })
})


