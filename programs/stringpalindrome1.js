let str="GadaG is a beautiful place to live in"
let splitoutput=str.split(' ');
let output=str.split('').reverse().join('');
console.log(output)
console.log(splitoutput)


if(str===output){
    console.log("given string is palindrome")
}

else{console.log("given string is not a palindrome")}




