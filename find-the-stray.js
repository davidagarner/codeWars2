// You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

function stray(num) {


    let sort =  num.sort()
    
    if(num[0] !== num[1]){
      
    return num.shift()
    
    }else{
      return num.pop()
    }
    
    
    }