function stretch(timeLeft) {
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      if(timeLeft>=1000){
        timeLeft = timeLeft-1000
        console.log("done stretching")
        resolve(timeLeft)
      } else{
        reject("Error: you dont have enough time to stretch")
      }
    },1000)
  })
}


function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      if(timeLeft>=500){
        timeLeft = timeLeft-500
        console.log("done running on treadmill")
        resolve(timeLeft)
      } else {
        reject("Error: you dont have enough time to run on treadmill")
      }
    },500)
  })
}


function liftWeights(timeLeft) {
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      if(timeLeft>=2000){
        timeLeft = timeLeft-2000
        console.log("done lifting weight")
        resolve(timeLeft)
      } else {
        reject("Error: you dont have enough time to lift weights")
      }
    },2000)
  })
}


function workout(totalTime) {
  stretch(totalTime)
  .then((timeLeft) => runOnTreadmill(timeLeft))
  .then((timeLeft) => liftWeights(timeLeft))
  .then(() => console.log("done working out"))
  .catch((err)=> console.log(err))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
