//// LOCALHOST
// "localhost" ismi, diğer "domain name"lerden farksızdır. (google vs gibi)
// "localhost" bizi "loop-back ip adress" denilen "127.0.0.1" adlı "ip adres"ine götürür. (görsel.1.1) Özetle, Tarayıcı aslında bizim bilgisayarımıza bağlıdır.(ama aynı zamanda "host"(ana makine) gibi "request"lerimize "response" verir.)

//// PORT NUMBERS
// port (giriş) number, bilgisayarımıza açılan bir kapı / geçit gibidir.
// skype, whatsapp, discord gibi uygulamalar farklı "port number"lar kullanarak veri ayrıştırması yaparlar.(böylelikle birindeki veri diğerlerinde olmaz)
// "localhost" ile kurduğumuz "server"ımızında "port number"ı vardır. Genellikle "3000"dir. (görsel.1.2) (Kullanılan "port number" başka bir programın "port number"ıyla çakışmadığı müddetçe herhangi bir numara kullanılabilir.)

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// "node server" komuduyla, dosyayı Node ile çalıştırdığımızda; server, localhost 3000 üzerinden gelecek komutları beklemeye başlar.
