var a=0;
for(var i=0; i<=500; i++){
    if(i % 3 === 0){
        a += i;
    }
}
console.log(a);

var A=[0, 1, 1, 2, 3, 5];
for(var i=2; i<=10; i++){
    A[i]=A[i-1]+A[i-2];
}
console.log(A);

var b=[1,1];
for(var n = 2;n <= 10; n++){
    b[n] = b[n-1] + 2 * b[n-2];
}
console.log(b);