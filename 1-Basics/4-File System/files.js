//// File System, Node js'teki "built-in core modules"dandır. (File System, dosyalarla "read, write, delete" işlemlerini gerçekleştirir.)

const fs = require("fs");

// READING FILES
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  // console.log(data); // "buffer" döndürür.
  console.log(data.toString());
});

// "readFile()" asenkron çalışır.
console.log("something after readFile()");
