const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Then, add timing code
  let arr = []
  for(let i=1; i<=10; i++){
    let startTime = Date.now()
    arr.push(addNums(i*increment))
    let endTime = Date.now()
    console.log(`Total time to execute -> ${endTime - startTime}ms`)
  }
  return arr
}


function addManyNums10Timing(increment) {
// Then, add timing code
  let arr = []
  for(let i=1; i<=10; i++){
    let startTime = Date.now()
    arr.push(addManyNums(i*increment))
    let endTime = Date.now()
    console.log(`Total time to execute -> ${endTime - startTime}ms`)
  }
  return arr
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
