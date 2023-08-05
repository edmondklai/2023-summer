// Use a while loop to print out all the even numbers less than 100

function evenNumbers(starting, ending) {
  let i = starting;
  while (i < ending) {
    if (i % 2 === 0) {
      console.log(i)
    }
    i = i + 1
  }
}

// evenNumbers(0, 100)

// Use a while loop to reverse a string. For example, if the input is "Hello, World!", the output should be "!dlroW ,olleH".
function reverseString(inputString) {
  let i = inputString.length - 1;
  let reversedString = '';

  while(i >= 0) {
    reversedString = reversedString + inputString[i]
    i = i - 1
  }
  return reversedString

  // return "!dlroW ,olleH"
}

// Use a while loop to calculate the sum of all numbers less than 100
function getSum(inputNumber) {
  let sum = 0;
  
  let i = 0;

  while(i <= inputNumber) {
    sum = sum + i
    i = i + 1
  }
  return sum
}

// console.log(getSum(1000))

function findMinimum(busCapacity, classroomSize) {
  let studentsOnBus = 0;
  let i = 0;
  while(studentsOnBus < busCapacity) {
    if (studentsOnBus + classroomSize[i] > busCapacity) {
      return studentsOnBus
    }
    studentsOnBus = studentsOnBus + classroomSize[i]
    i = i + 1
  }

  return studentsOnBus
}

const busCapacity = 50
const classroomSize = [15, 25, 20, 31, 15]

console.log(findMinimum(busCapacity, classroomSize))
// console.log(reverseString("Hello, World!"))


