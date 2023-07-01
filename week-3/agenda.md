# Week 3

## Review
For each of the tasks, create a necessary
1. Declare a constant variables and print to the screen 
2. Declare a variables call length that equals to 10, then add 15 to it. Print the output
3. Declare a variable name studentId, schoolName, studentName. Then print out the following using these variables. 
  - My name is Student A. My student ID is 3234, and I go to Chicago School. 
4. Create a function call printInformation for number 3, the input should be the studentId, schoolName, and studentName. You should be able to call the function with different input and output the same information. 
5. Create a function that calculate the area of circle. Input should be radius and output should be the area. 

## DevOp
- Create a new Github account
- Clone this repository
  - `git clone https://github.com/edmondklai/2023-summer.git

### Set up your local name and email
  - git config --global user.name "Your Name"
  - git config user.name

  - git config --global user.email "your@email.address"
  - git config user.email

### Git Commands
To stage changes:
  - git add .  (all the files in the whole directory and its children)
  - git add --all

To unstage all changes
  - git reset

To commit a change
  - git commit -m "Change message"

To push a change to GitHub
  - git push

To pull changes from GitHub
  - git pull

## New concepts
These are the new concepts we will cover for this week.

### Conditions
Idea: Previously, we have executed code that only does one thing. The program is linear. We want to create programs that are smarter and execute different actions when different conditions are met. 

Syntax: 
```js
  if (conditionA === true) {
    console.log('conditionA is true')
  } else if (conditionB === true) {
    console.log('conditionB is true')
  } else if (conditionC === true) {
    console.log('conditionB is true')
  } else {
    console.log('none of the condition is true')
  }
```

Different type of logical comparing
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

