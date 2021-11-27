// "require" kullandığımız da, Node o dosyaya ulaşır ve içeriğini çalıştırır.
const xyz = require("./people");

// console.log(xyz); // "empty object" döndürür. ("people"da "export" edilen bir şey olmadığı için) (var ise "export" edilen şeyi döndürür.)

//// "require" ile ulaştığımız dosyanın, içeriğine ulaşamayız.
console.log(people); // Error "prople is not defined"

// "people"a buradan ulaşabilmek istiyorsak, people objectini bulunduğu dosyada "export" etmemiz gerekir. Bu dosya da ise, "require"ı atadığımız değişken üzerinden ulaşabiliriz. (aynı isim de olaiblir ama zorunlu değil)
console.log(xyz);

console.log(xyz.people);
console.log(xyz.ages);
// // yukarıdaki gibi "dot" notation ile uğraşmamak için "object destructuring" yapabiliriz.
// const { people, ages } = require("./people");
// console.log(people, ages);
