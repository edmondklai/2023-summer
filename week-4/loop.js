
function forLoop() {
  for (let i = 0; i < 100; i = i + 1) {
    console.log(i * i)
  }
}

function forLoopOdd() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 2 !== 0) {
      console.log('odd', i)
    }
    if (i % 2 === 1) {
      console.log('odd', i)
    }
  }
}

forLoopOdd()

function whileLoop() {
  let j = 0;
  while (j < 10) {
    console.log(j)
    j = j + 1 
    // make sure the condition is updated correctly
    // otherwise the loop will run forever!
  }
}

// forLoop()
// whileLoop()

// ! ForLoop Example
// ! print out square to

function square(to) {
  for (let i = 0; i < to; i = i + 1) {
    console.log(i, 'square is', i * i)
  }
}

// ! While loop example
// ! print out all the even numbers
function isEven(to) {
  let i = 0
  while(i < to) {
    if (i % 2 === 0) {
      console.log(i, 'is even')
    }
    i = i + 1
  }
}


// square(100)
// isEven(100)