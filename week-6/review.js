let numbers = [15, 10, 15, 20, 25];
let sum = 0;
i = 0;
while (sum < 50) {
  sum += numbers[i];
  i = i + 1;
}
console.log(sum);


let result = 2;
let powerOf = 1;
while (result < 10000) {
  result = result ** powerOf;
  powerOf = powerOf + 1;
}
console.log(powerOf, result);