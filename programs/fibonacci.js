let a=0;
let b=1;
let count=10;

console.log(a)
console.log(b)

for(let i=3;i<=count;i++){


    let c=a+b;
    a=b;
    b=c;
console.log(c);
}