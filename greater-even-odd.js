

function evenOrOdd(str) {


    let arr = str.split('')
    
    let even = arr.filter(a => a%2 == 0)
    let odd = arr.filter(a => a%2 > 0)
    
    let oddSum = odd.map(a => Number(a)).reduce((a,b)=> a+b)
    
    let evenSum = even.map(a => Number(a)).reduce((a,b)=> a+b)
    
    return (oddSum == evenSum) ? 'Even and Odd are the same' : (oddSum > evenSum) ?  'Odd is greater than Even' : 'Even is greater than Odd' 
    
    }