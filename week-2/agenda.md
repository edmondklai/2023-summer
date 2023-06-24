# Week 2

## DevOp
- Create a new Github account
- Clone this repository
  - `git clone https://github.com/edmondklai/2023-summer.git

### Set up your local name and email
  - git config --global user.name "Your Name"
  - git config user.name

  - git config --global user.email "your@email.address"
  - git config user.email

## Installing Node
- Running JavaScript on your computer instead of inside the browser

### Create a new repo in Github
https://www.youtube.com/watch?v=xvwBtODV0ms
  - Use the graphic interface (GI) to create a repo 
  - Clone with your 
- Lean some basic git commands
  - git --version
  - git --help

- Making your first commit
  - git add fileName.js
  - git commit -m "My first commit"
  - git push

## Coding
### Declaring variables in JS
 - let, const

### Printing statement
- console.log()

### Basic data type
- boolean
- string
- number
- array
- object
- undefined / null

### Boolean
```js
  // declaration
  let isEating = true
  let isSleeping = false
  const isHuman = true

  isEating = false
  isSleeping = true
  isHuman = false
  console.log(isEating, isSleeping, isHuman)
```

### Basic Arithmetic 
```js
console.log(1 + 1) // 2
console.log(3 - 2) // 1
console.log(3 * 4) // 12
console.log(4 / 2) // 2
console.log(10 % 3) // 1
```

### String
JavaScript strings are for storing and manipulating text. 

note: JavaScript convention is to declare variables name in camelCase, first word use lower case, all the words after make sure to capitalize.
```js
  // declaration
  const myName = "Edmond"
  const myAddress = "123 Main Street, Chicago"

  // basic string operation
  // https://www.w3schools.com/js/js_string_methods.asp

  const firstName = "Edmond"
  const lastName = "Lai"
  const fullName = firstName + " " + lastName 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  const fullNameTemplateLiteral = `${firstName} ${lastName}`

  fullName.length // property

  fullName.replace("E", "A") // function
  fullName.toUpperCase()
```

### Function
```js

function print() {
  console.log("hello world")
}

print()

function add(number1, number2) {
  return number1 + number2 
}

console.log(add(1, 3))
console.log(add(5, 6))
```

### Array
```js
  const arr = [1, 2, 3, 4, 5]

  const names = []
  names.push('Jane')
  console.log(names)
  names.push('John')
  console.log(names)
  names.pop() // remove and return the last element
  console.log(names)
  names.push('Mary')
  names.push('Jack')
  console.log(names)

  console.log(names[0], names[1], names[2])
  console.log(names.slice(0, 1))
```

### Loop

```js
const names = ["Mary", "Jane", "Paul", "Nancy"]

for (let i = 0; i < names.length; i = i + 1) {
  console.log(names[i])
}

let count = 0
while (count < 10) {
  console.log(`count: ${count}`)
  count = count + 1
}

```

## Condition
```js
  const name = "Edmond"
  let isEating = false
  if (name === "Edmond") {
    console.log(`the name is ${Mary}`)
  } else if (name === "Mary") {
    console.log(`the name is ${Mary}`)
  } else {
    console.log('I did not find a name')
  }
```


### Challenge for today

#### Very Easy
- Print all even numbers from 0 – 10
- Create a function that convert Celsius to Fahrenheit
- Calculate the sum of numbers within an array
- Remove the spaces found in a string
- Write a function that return a Boolean if a number is divisible by 7
- Return the number of vowels in a string
- FizzBuzz
- Function that convert hours to secconds
- Write a function that find the area of a triangle
- Find the smallest number from an array

#### Easy
- Add up the Numbers from a Single Number
- Find the smallest number and the largest number from an array

### Next week
- Let's build something on the website, possibly some simple game and publish it on the internet. 