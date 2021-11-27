//// File System, Node js'teki "built-in core modules"dandır. (File System, dosyalarla "read, write, delete" işlemlerini gerçekleştirir.)

const fs = require("fs");

// // READING FILES
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(data); // "buffer" döndürür.
//   console.log(data.toString());
// });

// // "readFile()" asenkron çalışır.
// console.log("something after readFile()");

////// WRITING FILES
//// 1. parametre; relative path, 2.parametre; yazacağımız text, 3.parametre; işlem tamamlandığında çalışacak olan "callback function".
// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("file was written");
// });

// // Aynı işlemi var olmayan bir dosyaya uygularsak, dosya Node tarafından oluşturulur.
// fs.writeFile("./docs/blog2.txt", "hello, world", () => {
//   console.log("file was written");
// });

//// DIRECTORIES
// Yeni bir klasör (folder) oluşturmak için "mkdir()" kullanırız.
// Var olan klasörü silmek için, "rmdir()" kullanırız.
// Var olup olmadığını "existsSync()" ile öğrenebiliriz.
if (!fs.existsSync("./img")) {
  fs.mkdir("./img", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./img", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
