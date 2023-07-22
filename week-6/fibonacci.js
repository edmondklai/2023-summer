// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

// The next number is found by adding up the two numbers before it:

// the 2 is found by adding the two numbers before it (1+1),
// the 3 is found by adding the two numbers before it (1+2),
// the 5 is (2+3),
// and so on!

function fibonacciWrong(input) {
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 0; i < input; i = i + 1) {
    console.log(a)
    console.log(b)
    temp = a
    a = b
    b = temp + b
    console.log('i', i, 'a', a, 'b', b)
  }
}

fibonacci(20)

function fibonacci(input) {
  let a = 0;
  let b = 1;
  let temp;
  console.log(a)
  for (let i = 0; i < input; i = i + 1) {
    console.log(b)
    temp = a
    a = b
    b = temp + b
  }
}

fibonacci(20)