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
