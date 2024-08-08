const findMinimum = arr => {
  let min = arr[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i]<min)
      min = arr[i]
  }
  return min
};

const runningSum = arr => {
  let sum = 0
  let newarr = []
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
    newarr.push(sum)
  }
  return newarr
};

const evenNumOfChars = arr => {
  let count = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i].length % 2 ==0)
      count++
  }
  return count
};

const smallerThanCurr = arr => {
  let newarr = []
  for(let i=0; i<arr.length; i++){
    let count = 0
    for(let j=0; j<arr.length; j++){
      if(i===j)
        continue;
      else{
        if(arr[i]>arr[j])
          count++
      }
    }
    newarr.push(count)
  }
  return newarr
};

const twoSum = (arr, target) => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(i===j)
        continue
      else{
        if(arr[i]+arr[j]===target)
        return true
      }
    }
  }
  return false
};

const secondLargest = arr => {

};

const shuffle = (arr) => {

};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
