let sum = 0;
let count = 0;
for (let i = 2; count < 10; i++) {
    let isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    console.log(i);
    count++;
}
//# sourceMappingURL=main.js.map