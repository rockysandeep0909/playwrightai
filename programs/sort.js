let a=[84,98,94,85]
for(let i=0;i<a.length;i++){

    for(let j=i+1;j<a.length;j++){
        if(a[j]<a[i]){
            //swap
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }

   
}
 console.log(a)