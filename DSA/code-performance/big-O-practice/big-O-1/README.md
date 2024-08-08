# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: constant time operation, doesnt depend on array size also no additional space needed beyond new element


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: constant-time operation, and no additional space is needed for the operation


## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification:  removing first element requires shifting of other elements to the left, which is linear wrt arrays size. But no extra space needed


## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: adding an element to the beginning requires shifting other elements to the right, which is linear in time wrt arrays size. But no extra spacce needed.


## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: : Splicing involves removing or adding elements at any position, which may require shifting elements and allocating space for new elements, resulting in linear time and space complexity


## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification:  Slicing creates a new array with a subset of elements, requiring linear time to copy the elements and linear space to store the new array


## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Finding the index of an element requires scanning through the array, which is linear in time, but it does not require additional space


## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Mapping applies a function to each element, requiring linear time to process each element and linear space to store the resulting new array


## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Filtering involves examining each element to determine if it should be included, which is linear in time, and creating a new array to hold the filtered elements results in linear space complexity


## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Reducing processes each element once to accumulate a result, requiring linear time, but only a fixed amount of extra space for the accumulator


## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Reversing the array involves swapping elements in place, which is linear in time and constant in space since it modifies the array in place


## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Using the spread operator creates a shallow copy of the array, requiring linear time to copy elements and linear space for the new array
