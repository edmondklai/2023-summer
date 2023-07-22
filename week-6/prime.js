
function findPrimeNumber(input) {
  for (let i = 1; i <= input; i = i + 1) {
    let divider = 0;
    for (let j = 1; j <= i; j = j + 1) {
      if (i % j === 0) {
        divider = divider + 1
      }
      if (i === j && divider === 2) {
        console.log(i, ' is a prime number!')
        divider = 0
      }
    }
  }
}

findPrimeNumber(1000)