# Week 4

## Review

```js
if (conditionA === true) {
  console.log("conditionA is true");
} else if (conditionB === true) {
  console.log("conditionB is true");
} else if (conditionC === true) {
  console.log("conditionB is true");
} else {
  console.log("none of the condition is true");
}
```

```js
if (a === b) {
  // a equal to b
}
if (a !== b) {
  // a does not equal to me
}
if (a > b) {
  // a greater b
}
if (a < b) {
  // a less than b
}
if (a >= b) {
  // a greater than or equal to b
}
if (a <= b) {
  // a less than or equal to b
}
```

### Extra explanation

See booleanAssignment HTML

See logic check example

## Install linter for JS

Open Extension
Search for Prettier
Cmd + Shift + p
Preference: User Json

```json
{
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript"]
}
```

### Boolean logic

Idea: we want to use multiple conditions to determine how the program should execute. So we will learn about AND, OR, NOT

Syntax:

```js
console.log(conditionA && conditionB); // and
console.log(conditionaA || conditioA); // or
```

print statements that prints out all possible scenarios

```js
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
```

```js
console.log(!true);
console.log(!false);
```

#### Practice

1. Create a password checker function that takes one password returns true if the password is equal to 'strong-password', otherwiese return false.
2. Create a postive number checker function that takes 2 input, if both numbers are positive, return true. If not both number are postive, return false.
3. Create a function that takes, 7 number input (temperature for each day). If any of the day, exceed 90 degree, then print (it's too hot!), otherwise, print ('It's pretty cool')
4. Create a function to takes 2 number input. Return the highest number.

## Loop

In computer programming, a loop is a sequence of instruction that is continually repeated until a certain condition is reached. Typically, a certain process is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number.

For loop

Basic for loop in computer science

```js
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
```

While loop

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}
```

### Practice for loop

Easy

1. print out 20 numbers that is greater than zero
2. print out all the odds number that is less than 100
3. print out all the numbers from 0 to 100 that is both divisible by 3 and 5
4. print out all the numbers from 0 to 100 that is either divisible by 7 or divisble by 10

Medium

1. Create a function, use a loop to compute all the natural numbers that is less than 10
2. FizzBuzz - Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”.

Hard

1. Create a function, use a loop, to return the largest integer, where the integer square is less than 100

Super hard

1. Create a function that print out the fibonacci sequence to the n term
