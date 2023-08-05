# Week 6

## Review

- Array index

```js
const name = [1, 3, 5, 63, 4];

name[6];
```

```sh
git clone <URL_HERE>
```

- Show and tell about your problems that you did

- Prime number

- Fibonacci sequence

## While Loop

A while loop is a control flow statement in programming that allows code to be executed repeatedly based on a given condition. The loop will continue to execute until the condition evaluates to false.

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i = i + 1;
}
```

Return the sum once it's greater than 25

```js
let numbers = [15, 10, 15, 20, 25];
let sum = 0;
let i = 0;
while (sum < 50) {
  sum = sum + numbers[i];
  i = i + 1;
}
console.log(sum);
```

Practice:
Easy

- Use a while loop to print out all the even numbers less than 100
- Create an array of string that has a lenght of five. Use a while loop to print out all the elements in the array.

Medium

- Use a while loop to count how many times a certain letter appears in a string. For instance, if the input is "Hello, World!" and the letter to count is 'l', the output should be 3.

- Use a while loop to reverse a string. For example, if the input is "Hello, World!", the output should be "!dlroW ,olleH".

- Use a while loop to calculate the sum of all numbers less than 100

Hard

- Use a while loop, find how many power of 2 is greater than 1000

## Array

Array methods

_Adding and removing elements from array_

- push(): Adds one or more elements to the end of an array and returns the new length of the array.

- pop(): Removes the last element from an array and returns that element.

- shift(): Removes the first element from an array and returns that removed element.

- unshift(): Adds one or more elements to the front of an array and returns the new length of the array.

```js
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]
```

```js
let arr = [1, 2, 3];
let lastElement = arr.pop(); // arr is now [1, 2], lastElement is 3
```

```js
let arr = [1, 2, 3];
let firstElement = arr.shift(); // arr is now [2, 3], firstElement is 1
```

```js
let arr = [1, 2, 3];
arr.unshift(0); // arr is now [0, 1, 2, 3]
```

_Combining elements_

- concat(): Used to merge two or more arrays.

- join(): Joins all elements of an array into a string.

- slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

- splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2); // arr3 is now [1, 2, 3, 4, 5, 6]
```

```js
let arr = ["Hello", "world"];
let str = arr.join(" "); // str is now "Hello world"
```

```js
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4); // slicedArr is now [2, 3, 4]
```

```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, "three", "four"); // arr is now [1, 2, "three", "four", 5]
```

_Searching for elements_

- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

- includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

- find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```js
let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // index is now 2
```

```js
let arr = [1, 2, 3, 4, 5];
let isInArray = arr.includes(3); // isInArray is true
```

```js
let arr = [1, 2, 3, 4, 5];
let found = arr.find(function (element) {
  return element > 3;
});
// found is 4
```

_Sorting_

- sort(): Sorts the elements of an array in place and returns the array.

```js
let arr = [5, 3, 2, 4, 1];
arr.sort(); // arr is now [1, 2, 3, 4, 5]
```

### Advance using array for looping and perform operation

These array method is not applicable for all programming languages.

- forEach(): Executes a provided function once for each array element.

- map(): Creates a new array with the results of calling a provided function on every element in the calling array.

- filter(): Creates a new array with all elements that pass the test implemented by the provided function.

- reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
let arr = [1, 2, 3];
arr.forEach(function (item) {
  console.log(item);
});
// logs 1, 2, 3 to the console
```

```js
let arr = [1, 2, 3];
let newArr = arr.map(function (item) {
  return item * 2;
});
// newArr is now [2, 4, 6]
```

```js
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(function (item) {
  return item > 3;
});
// newArr is now [4, 5]
```

```js
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is now 15
```

### Example

## Loop

Looping practice with array
push(): Create an empty array. Then use a loop to push the numbers from 1 to 10 into the array.

pop(): Create an array with the numbers from 1 to 5. Use the pop() method until the array is empty, and print the removed element each time.

shift(): Given an array of string words, remove the first word from the array and display it.

unshift(): Given an array of string words, add a new word at the beginning of the array.

concat(): Concatenate two arrays [1, 2, 3] and [4, 5, 6].

join(): Given an array of words, join them together into a sentence.

slice(): Given an array, use slice() to get the second and third elements.

splice(): Given an array, use splice() to replace the second element with a new element.

indexOf(): Use indexOf() to find the position of the number 3 in an array.

includes(): Use includes() to check if a certain number exists in an array.

find(): Use find() to find the first number in an array that is greater than 10.

sort(): Sort an array of numbers in ascending order.

## object

## database
