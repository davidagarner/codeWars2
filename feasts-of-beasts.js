// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    let beastL = beast.split('').pop()
    let dishL = dish.split('').pop()
    
    return (beast[0] == dish[0] && beastL == dishL ) ? true : false
    
    
    }