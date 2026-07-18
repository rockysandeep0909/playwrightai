let givenString="India"

let reverseString ="";

for(let i=givenString.length-1;i>=0;i--){
    reverseString=reverseString+givenString[i];
    console.log(reverseString)
    // reverseString+=givenString[i];
}

if(givenString===reverseString){
    console.log("given string is palindrome")
}
else{console.log("given string is not a palindrome")}