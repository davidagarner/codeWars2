// Your task is to make function, which returns the sum of a sequence of integers.The sequence is defined by 3 non-negative values: begin, end, step. If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    let arr = []
  
    for (var i=begin; i<=end; i += step){
      arr.push(i)
    }
   return (arr <= 0)? 0: arr.reduce((a,b )=> a+b)
  };