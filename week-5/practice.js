// 1.
// print out 20 numbers greater than zero

function twentyNumbers() {
  for (let i = 1; i < 21; i = i + 1) {
    console.log(i)
  }
}

// print out all the odds number that is less than 100

function oddNumbers() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}

// print out all the numbers from 0 to 100 that is both divisible by 3 and 5

function divisibleBy3And5() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i)
    }
  }
}


// print out all the numbers from 0 to 100 that is either divisible by 7 or divisble by 10
function divisibleBy7Or10() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 7 === 0 || i % 10 === 0) {
      console.log(i)
    }
  }
}

function answer() {
  for (let i = 1; i <= 100; i = i + 1) {
    if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

// answer()
// twentyNumbers()
// oddNumbers()
// divisibleBy3And5()
// divisibleBy7Or10()

const colors = ['red', 'blue', 'green', 'yellow', 'black', 'grey', 'pink'];

function myFavorteColor(colors) {
  for (i = 0; i < colors.length; i = i + 1) {
    console.log('My favorite color is ' + colors[i])
  }
}
// myFavorteColor(colors)

const temperatures = [23, 65, 98, 32, 25, 64, 80, 100];

function temperatureCheck(temperatures) {
  for (let i = 0; i < temperatures.length; i = i + 1) {
    // const temperature = temperatures[i]
    if (temperatures[i] > 80) {
      console.log(temperatures[i] + " is hot")
    } else if (temperatures[i] < 50) {
      console.log(temperatures[i] + " is cold")
    } else {
      console.log('temperature is normal at ' + temperatures[i])
    }
  }
}

temperatureCheck(temperatures);
