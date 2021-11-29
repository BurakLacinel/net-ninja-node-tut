const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/plain");

  res.write("hello, ninjas");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// Notlar:
// "Response" oluştururken, ilk yapılacak şey "response header" oluşturmaktır.
// "Node server" komuduyla "server.js" dosyasını çalıştırdığımızda, "localhost:3000"de response'u görürüz. DevTools'da "network" sekmesinden detaylara bakabiliriz.(Header vs.)
