let marks=[84,98,94,87,55, 100, 70, 90,102]



let max=marks[0];
let min=marks[0];

for(let i=1;i<marks.length;i++){
    if(marks[i]>max){
        max=marks[i]
    }
}

for(let i=1;i<marks.length;i++){
    if(marks[i]<min){
        min=marks[i]
    }
}


console.log("maximum value is " + max);
console.log("minimum value is " + min);