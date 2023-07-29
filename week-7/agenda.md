# Week 7

## Review

While loop

Array index

## Array methods

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

Practice:

1. Write a function named add Value that takes an array and a number as parameters. The function should add the number to the end of the array using the push method and return the new array.

2. Write a function named removeLastValue that takes an array as a parameter. The function should use the pop method to remove the last element from the array and return the element that was removed.

3. Write a function named removeFirstValue that takes an array as a parameter. The function should use the shift method to remove the first element from the array and return the element that was removed.

4. Write a function named prependValue that takes an array and a string as parameters. The function should use the unshift method to add the string to the beginning of the array and return the new array.

5. Write a function named modifyArray that takes an array as a parameter. The function should remove the first element of the array, add a "JavaScript" string to the start, remove the last element of the array, and add a "Programming" string at the end. Use the shift, unshift, pop, and push methods for these operations. Return the modified array.

6. Write a function named stackOperations that takes a JavaScript array as input, representing a stack. The function should push two values onto the stack, pop one value off the stack, and then return the resulting stack. Use the push and pop methods.

7. Write a function named queueOperations that takes a JavaScript array as input, representing a queue. The function should add an element to the end of the queue, then remove an element from the front of the queue, and finally return the resulting queue. Use the push and shift methods.

_Combining elements_

- concat(): Used to merge two or more arrays.

- join(): Joins all elements of an array into a string.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2); // arr3 is now [1, 2, 3, 4, 5, 6]
```

```js
let arr = ["Hello", "world"];
let str = arr.join(" "); // str is now "Hello world"
```

Practice:

1. Write a function named mergeArrays that takes two arrays as parameters. The function should combine both arrays into one using the concat method and return the combined array.

2. Write a function named arrayToString that takes an array as a parameter. The function should convert the array into a string where each element is separated by a comma using the join method and return the resulting string.

3. Write a function named joinWithHyphen that takes an array as a parameter. The function should convert the array into a string where each element is separated by a hyphen ("-") using the join method and return the resulting string.

4. Write a function named joinAndConcat that takes two arrays of strings as parameters. The function should first concat the two arrays into a single array. Then use the join method to turn the array into a string seperated by a space. Return the string.

5. Write a function named multiConcat that takes an array of arrays as a parameter. The function should combine all of the arrays into one single array using the concat method and return the combined array.

- slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

- splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4); // slicedArr is now [2, 3, 4]
```

1. Write a function named getSubArray that takes an array, a start index, and an end index as parameters. The function should return a new array that includes the elements from the start index up to but not including the end index using the slice method.

Practice:

1. Pirate's Parrot Words: A pirate's parrot learns words by repeating what it hears. The parrot heard several phrases throughout the day. Write a function named parrotTalk that takes an array of phrases. The parrot tends to forget the last phrase it learned and always repeats the first phrase it heard. The function should remove the last phrase using pop, repeat the first phrase using push, and finally return the modified phrases' array.

2. Birthday Party: You are throwing a surprise birthday party and have a list of friends to invite. However, you've just made two new friends that you want to invite. Write a function named updateGuestList that takes an array of friend names, adds one friend to the beginning of the list and another to the end. Also, you just found out one of your friends can't make it and you need to remove them from the list. The function should return the updated guest list.

3. Pizza Toppings: You have an array of your favorite pizza toppings. But your doctor advised you to remove the first and last topping for health reasons. Also, you discovered two new toppings that you would like to add to your list. Write a function named updateToppings that takes an array of toppings, removes the first and last one, and adds one topping to the start and another to the end of the array. Return the modified toppings array.

## Object

- what JavaScript objects are and why they're useful.
- syntax of objects, properties, and methods.
- Show how to access properties using dot notation and bracket notation.
- live coding to demonstrate the above concepts.

Interactive Activity: Build Your Own Robot

Design your own simple robot in JavaScript object format.
The robot object should have properties like name, color, numberOfWheels, and methods like greet, move, and doTask.

Students will share their robot code and describe their robot's capabilities.
