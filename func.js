console.log("done");

let num = Math.round(Math.random() * 10);
//console.log('Math.random ',);
let input;
let count = 0;
do {
  input = +prompt("Enger num");
  if (input < num) {
    console.log("Too small");
  }
  if (input > num) {
    console.log("Too large");
  }
  count++;
} while (num != input);
console.log("Correct at times ", count);
