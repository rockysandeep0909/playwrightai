//fizz-Buzz
for(let i =1;i<=100;i++){


    if(i%3===0 && i%5===0){
        console.log("Number", i, "is Fizz-Buzz");
    }
    else if (i%3===0){
        console.log(`Number ${i} is Fizz`);
    }
    else if(i%5===0){
        console.log("Number " + i + " is Buzz");
    }
}
