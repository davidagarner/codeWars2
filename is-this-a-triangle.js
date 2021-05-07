// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.



function isTriangle(a,b,c){
    let arr = [a,b,c].sort()
    
    return (arr[0] + arr[1] > arr[2]) ? true : false
}