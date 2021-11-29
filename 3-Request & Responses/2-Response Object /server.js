const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // send an html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      // error varsa bile "request" evresinde donup kalmaması için "response"u sonlandırmak lazım.
      res.end();
    } else {
      // res.write(data);
      // res.end();
      //// tek bir şey yolluyorsak aşağıdaki şekilde yapabiliriz.
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// Notlar:
// "Response" olarak, yukarıda ki gibi "html" gönderdiğimiz de, kodun okunabilirliği azalır ve işler kolaylıkla karmaşıklaşabilir. Bu sebepten "html" gönderirken, "html" dosyalarını "views" adlı farklı bir klasörde oluşturup, "fileSystem"ı kullanarak "response" hazırlayabiliriz.
//
