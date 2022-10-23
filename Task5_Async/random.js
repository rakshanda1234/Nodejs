// function myfun() {
//   console.log("Inside Function");
// }
// console.log("Start");
// myfun();
// console.log("End");

// console.log("Start");
// const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// roll.forEach((r) => {
//   console.log(r);
// });
// console.log("End");

console.log("Start");

function getName(name) {
  setTimeout(() => {
    console.log("Inside SetTimeout");
    return name;
  }, 2000);
}
const nm = getName("Rakshanda");
console.log(nm);
console.log("End");
