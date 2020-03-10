// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//Creating our function= that takes in a string and returns a coded message
const codedMessage = (string) => {
    //Wanting to use regex finally. We use .replace multiple times back to back here to check and replace individual letters.
    return string.replace(/[a]/gi, "4").replace(/[e]/gi, "3").replace(/[i]/gi, "1").replace(/[o]/gi, "0")
}

//Calling our function within a consolelog.
console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//Creating our function that takes in an array and returns all the words that have the letter "a" in them.
const onlyA = (array) => {
    //Again, I wanna use some regex, its dope. Going to use a built in method called .match that specifically works with regex and returns an array based on a boolean result. 
    return array.filter(word => word.match(/[a]/gi))
}

//Calling our function in a console.log.
console.log(onlyA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false


//Full house = two numbers have to match and then a different set of three numbers have to match. 

//Creation of function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.


const isFullHouse = ( array ) =>{
    
    //Using Set and .length method to check if the numbers are greater than two at a time. Utilizing ternary to return our true or false boolean. 
    return ( [...new Set( array )].length > 2 ) ? false : true
}

//Calling our function with a console.log. 
console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))