const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  res.write("<p>hello, ninjas</p>");
  res.write("<p>hello again, ninjas</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// Notlar:
// "Response" olarak, "text" yerine "html"de gönderebiliriz.
// "html" dönderdiğimiz de, tarayıcı otomatik olarak html <head> ve <body>sini oluşturur.
