//// Global Object
// "global", birazcık front end'teki "window" object'ine benzer. (Browser'da, "window" "global object"tir. Node'ta ise "global" "global object"tir.)

// console.log(global);

// ************************************

// global.setTimeout(() => {
//   console.log("in the timeout");
//   clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//   console.log("in the interval");
// }, 1000);

// ************************************

// bulunduğumuz "directory" (dizin)i döner.
console.log(__dirname);
// bulunduğumuz dizin'i dosya adı'yla birlikte verir.
console.log(__filename);
