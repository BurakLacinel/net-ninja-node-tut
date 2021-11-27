// "require" kullandığımız da, Node o dosyaya ulaşır ve içeriğini çalıştırır.
const xyz = require("./people");

// console.log(xyz); // "empty object" döndürür. ("people"da "export" edilen bir şey olmadığı için) (var ise "export" edilen şeyi döndürür.)

//// "require" ile ulaştığımız dosyanın, içeriğine ulaşamayız.
console.log(people); // Error "prople is not defined"
