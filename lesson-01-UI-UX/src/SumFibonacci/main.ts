function fibonacci(num:number):any{
    if (num == 0 || num == 1){
        return 1;
    }else {
        return (fibonacci(num -1 ) + fibonacci(num - 2));
    }
}

sum = 0;
for (let i =0 ; i <10; i++){
    console.log(fibonacci(i));
    sum += fibonacci(i);
}

console.log(sum);