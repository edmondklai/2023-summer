# Week 8

## Review

1. Pirate's Parrot Words: A pirate's parrot learns words by repeating what it hears. The parrot heard several phrases throughout the day. Write a function named parrotTalk that takes an array of phrases. The parrot tends to forget the last phrase it learned and always repeats the first phrase it heard. The function should remove the last phrase using pop, repeat the first phrase using push, and finally return the modified phrases' array.

2. Birthday Party: You are throwing a surprise birthday party and have a list of friends to invite. However, you've just made two new friends that you want to invite. Write a function named updateGuestList that takes an array of friend names, adds one friend to the beginning of the list and another to the end. Also, you just found out one of your friends can't make it and you need to remove them from the list. The function should return the updated guest list.

3. Pizza Toppings: You have an array of your favorite pizza toppings. But your doctor advised you to remove the first and last topping for health reasons. Also, you discovered two new toppings that you would like to add to your list. Write a function named updateToppings that takes an array of toppings, removes the first and last one, and adds one topping to the start and another to the end of the array. Return the modified toppings array.

## Object

### Introduction:

What is an object in the real world? (Example: A book with its properties like title, author, pages, etc.)

Illustration: Show a visual representation of a book and its properties.

Just like in the real world, in JavaScript, we have objects that store various pieces of data about one thing.

Objects are collections of key-value pairs.

```js
let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  pages: 400,
};
```

Practice: Students create their own objects based on their favorite books, movies, or hobbies.

### Accessing Object Properties:

We can access values using dot notation or bracket notation.

`objectName.property OR objectName["property"]`

```js
console.log(book.title); // Output: Harry Potter
console.log(book["pages"]); // Output: 400
```

Practice: Students access different properties from their previously created objects.

### Adding and Modifying Object Properties

You can add new properties or modify existing ones.

```js
book.year = 1997;
book.author = "Joanne Rowling";
```

Update the book object's author and add a year property.

### Removing property from the object

```
delete book.pages;
```

### Object Methods

Object methods are functions stored as properties within an object. They allow objects to have actions (or behaviors) associated with them.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // Outputs: John Doe
```

Add a method to their objects created earlier.

For the book object, students might add a method like getSummary which returns a short summary of the book.

### Projects

#### Create a student profiles using Object. This object should have.

- first name (string)
- last name (string)
- full name (method to print out full name)
- hobbies (array of strings)
- favorite book (object with name, and author property)
- greet (function that say hello and tell us all your hobbies)

#### Interactive Activity: Build Your Own Robot

Design your own game character in JavaScript object format.
The robot object should have properties like name, strength, location, hp, and methods like attack, move, and equip.

Students will share their robot code and describe their robot's capabilities.
