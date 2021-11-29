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

// Notlar:
// Redirect; Diyelim ki bir web sitemiz var ve "/about-me" adında bir "route"u var. Fakat sonradan "/about-me"yi "/about" yapmaya karar verdik. Başka sitelerden "/about-me" "route"una link'ler verildiğini ve "/about-me" route'unun ziyaret edilmeye devam edileceğini düşünelim. Bu durumda "404" gerçekleşecektir. Çünkü artık "/about-me" yok, yerine "/about" var. Kullanıcıların "404" ile karşılaşmadan, direkt "/about"a yönlendirilmelerine "redirect" denir. Bunun için "switch"e bir "case" daha ekleyeceğiz.
