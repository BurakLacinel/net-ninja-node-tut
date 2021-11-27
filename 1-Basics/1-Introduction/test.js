// Terminal'de "node" komudunu girdikten sonra, "node.js" çalışmaya başlar. (artık terminal'e javascript yazabiliriz.) ("control + c"'ye iki defa basarak "node.js"i kapatabiliriz.)

const name = "mario";

console.log(name);
// terminal'e "node test" yazdığımızda "test.js" adlı dosyanın çıktı'sını görürüz.

const greet = (name) => {
  console.log(`hello ${name}`);
};

greet("mario");
greet("yoshi");
