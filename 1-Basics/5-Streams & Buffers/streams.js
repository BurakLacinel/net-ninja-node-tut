// Küçük dosyalar da "reading, writing" için, önceden görmüş olduğumuz metod'lar işe yarasa da, çok büyük boyutlu dosyalarda "stream"ler i kullanmalıyız.

// "Streams" (veri akışı/nehir) using data, before it has finished loading. (görsel.1.1)
// her yeni "chunk" (veri yığını) geldiğinde, kullanmaya başlayabiliriz. (netflix, youtube vs'deki video tam yüklenmeden izlemeye başlayabilmek, bu mantık üzerine kuruludur.)

// "readStream" ile datayı okuruz
// "writeStream" ile datayı yazarız
const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog3.txt");

// // "on", "addEventListener" gibidir. "data" eventi gerçekleştiğinde (yani veri parçası (buffer) geldiğinde, "callback function" çalışacak (gelen veri yığınına ulaşabileceğiz))
// readStream.on("data", (chunk) => {
//   console.log("---- NEW CHUNK ----");
//   // console.log(chunk);
//   console.log(chunk.toString());
// });

//// "chunk" ile "toString()" kullanmak yerine "readStream"de, "encoding" (dil kodlaması) yapabiliriz. (böylelikle gelen veri otomatik olarak "readable format"ta olurs)

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8"
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk);

  // her data yığını geldiğinde, yeni satırda "NEW CHUNK" yazdıracaz.
  writeStream.write(`\nNEW CHUNK\n`);
  // her data yığını geldiğinde, gelen datayı "blog4.txt"ye yazdıracağız.
  writeStream.write(chunk);
});
