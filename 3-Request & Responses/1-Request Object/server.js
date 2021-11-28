const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// Notlar: server'ı çalıştırdıktan sonra "server.js" adlı dosyada bir değişiklik yaparsak, güncellenme için "ctrl + c" ile server'ı durdurup, yeniden başlatmalıyız.
// "req.url" ile "url"e ulaşmak istediğimizde site adı dönmez. "/"(index,homepage) den itibaren döner.
