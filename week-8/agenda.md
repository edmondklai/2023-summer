# Week 8

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
