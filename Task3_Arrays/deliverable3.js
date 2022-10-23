const hobbies = ["Sports", "Cooking"];

// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

//hobbies.push("programming");
//console.log(hobbies);

//using slice
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

//nestedArray
// const copiedArray = [hobbies];
// console.log(copiedArray);

//spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

//rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
