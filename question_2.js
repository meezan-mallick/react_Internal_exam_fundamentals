a=[10,20,30,40,50]
b=[]
temp_1 = 0
for(i =0;i<a.length;i++){
    for(j =i;j<a.length;j++){
        temp_1 = temp_1+a[j];
    }
    b.push(temp_1);
    temp_1=0
}
console.log(b)