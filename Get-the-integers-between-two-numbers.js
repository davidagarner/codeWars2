// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.

function range(startNum, endNum){  
    let arr = []
    for(let i = startNum; i < endNum; i++){
       arr.push(i)
       }
      arr.shift()
      return arr
};  