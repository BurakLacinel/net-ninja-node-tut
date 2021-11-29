const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
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

// Notlar:
// Şu anda hangi "route"a gidersek gidelim aynı "index.html"i response olarak alıyoruz.
// "http://localhost:3000/about"a gidildiğinde "about.html"in döneceği, "about" dışında herhangi bir "route"a gidildiğinde "404.html"in döneceği bir düzenleme yapacağız.
