// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++)
      sum += array[i];
  } catch (error) {
    if(error instanceof TypeError){
      console.log("An Error occured: ", error.message)
    }
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
function sayName(name){
  if(typeof(name) !== String){
    throw new TypeError("Invalid name! Must be a string!")
  }
  console.log(name)
}

// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log("An Error occured: ", error.message)
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log("Hello World")
}
