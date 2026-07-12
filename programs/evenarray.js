let arr=[1,2,4,6,8,9,10,12,14,15,16,18,20,21,25,27]

let evennumber=[];

let oddnumber=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
         evennumber.push(arr[i]);
    }
    else{
        oddnumber.push(arr[i]);

    }
}

console.log(evennumber);
console.log(oddnumber);


