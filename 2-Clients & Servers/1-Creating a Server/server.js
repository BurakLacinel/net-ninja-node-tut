// server ile browser arasındaki iletişim "http protokolü" üzerinden gerçekleşir. (görsel.1.1)

// Node ile, browser'dan gelecek request'lere reponse oluşturmak için server kurarız. (Örnek olarak; php'de manuel olarak server kurmamıza gerek yoktur. Apache gibi tool'lar bunu bizim yerimize yapar. Ama Node'ta manuel olarak server kurmamız gerekir.)

// İlk olarak, "node core module" olan "http"yi "require" etmeliyiz.
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
