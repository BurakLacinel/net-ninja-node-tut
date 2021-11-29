const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; // 301; "resource moved"
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);

      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

//// NPM (Node Package Manager)
// "Node Core"da bulunmayan ilaveten "package" kullanmak istersek (lodash, express vs), yüklemek için "NPM" kullanabiliriz.

//// Installing Packages Globally
// Örnek olarak "Nodemon" pakedini yüklüyoruz.
// "npm install -g nodemon" komuduyla "nodemon"u "global" olarak yüklüyoruz. "global" yüklediğimiz için gelecekte, başka projelerde de kullanabiliriz.

//// package.json File
// Eğer additional "package" kullanacaksak, "package.json" dosyası oluşturmalıyız. Bunu "npm init" komuduyla yapabiliriz. (sorulan soruları "enter"a basarak geçip, "default" halinde bırakabiliriz.)
// "package.json" dosyası içerisinde "dependencies", yani proje de kullanılan "package" bilgileri yer alır.

//// package-lock.json File
// "package"ların versiyon bilgisini taşır. Manuel olarak müdahale edilip, bir şey yazılmaz.

//// Installing Packages Locally
// "npm install lodash" komuduyla "lodash"i yükledikten sonra, "lodash"in "ddependency" olarak "package.json"a eklendiğini görürüz.

//// Dependencies
// Yüklediğimiz "package"lar. "node_modules" klasöründe yer alır. Projedeki "node_modules" klasörünü "npm install" komuduyla yeniden yükleyebiliriz. ("package.json"ın "dependencies"in de yer alan "package"lar yeniden yüklenmiş olur)
