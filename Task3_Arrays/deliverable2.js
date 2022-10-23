const fruits = ["apple", "oranges", " ", "mango", " ", "lemon"];

console.log(fruits.map((fruit) => "Fruit :  " + fruit));
fruits[2] = "empty string";
fruits[4] = "empty string";
console.log(fruits);
