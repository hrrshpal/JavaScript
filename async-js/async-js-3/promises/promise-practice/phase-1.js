function stretch() {
  return new Promise((resolve)=>{
    setTimeout(function(){
      resolve("done stretching")
    },1000)
  })
}

function runOnTreadmill() {
  return new Promise((resolve)=>{
    setTimeout(function(){
      resolve("done running on treadmill")
    },500)
  })
}

function liftWeights() {
  return new Promise((resolve)=>{
    setTimeout(function(){
      resolve("done lifting weights")
    },2000)
  })
}

function workout() {
  stretch()
  .then((msg) => {
    console.log(msg)
    return runOnTreadmill()
  })
  .then((msg) => {
    console.log(msg)
    return liftWeights()
  })
  .then((msg) => {
    console.log(msg)
    console.log("done working out")
  })
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
