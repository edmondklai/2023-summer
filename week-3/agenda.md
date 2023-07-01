# Week 3

## DevOp - Review
- Create a new Github account
- Review
  - `cd ~`
  - `mkdir repos`
  - `cd repos`
  - `git clone https://github.com/edmondklai/2023-summer.git`
  - `code 2023-summer`

### Set up your local name and email
  - `git config --global user.name "Your Full Name"`
  - `git config user.name`

  - `git config --global user.email "your@email.address"`
  - `git config user.email`
  - `brew install gh`
  - Make chrome your default browser
  - `gh auth login`

### clone your own repository
  - `cd ~/repos`
  - `git clone <copy-your-repo-link-from-github>`
  - `code <repo-name>`

For each of the tasks, create a necessary
1. Declare a constant variables and print to the screen 
2. Declare a variables call length that equals to 10, then add 15 to it. Print the output
3. Declare a variable name studentId, schoolName, studentName. Then print out the following using these variables. 
  - My name is Student A. My student ID is 3234, and I go to Chicago School. 
4. Create a function call printInformation for number 3, the input should be the studentId, schoolName, and studentName. You should be able to call the function with different input and output the same information. 
5. Create a function that calculate the area of circle. Input should be radius and output should be the area. 


### Git Commands
To stage changes:
  - `git add .`  (all the files in the whole directory and its children)
  - `git add --all`

To unstage all changes
  - `git reset`

To commit a change
  - `git commit -m "Change message"`

To push a change to GitHub
  - `git push`

To pull changes from GitHub
  - `git pull`

If you are lost
  - `git status`

If you want to look at the history
  - `git log`

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

#### Condition practice
After each question, make sure you commit your changes to your repository

1. Create a function that take the score and print out the grade level, A, B, C, D, F
2. Create a function call `isOdd`. Takes an input of a number and return rather it's true or false
3. Write a program to accept two numbers and check whether they are equal or not.

### Boolean logic
Idea: we want to use multiple conditions to determine how the program should execute. So we will learn about AND, OR, NOT

Syntax:
```js
  console.log(conditionA && conditionB) // and
  console.log(conditionaA || conditioA) // or
```

print statements that prints out all possible scenarios
```js
  console.log(true && true)
  console.log(true && false)
  console.log(false && false)

  console.log(true || true)
  console.log(true || false)
  console.log(false || false)
```

```js
  console.log(!true)
  console.log(!false)
```

#### Practice
1. Create a password checker function that takes one password returns true if the password is equal to 'strong-password', otherwiese return false.
2. Create a postive number checker function that takes 2 input, if both numbers are positive, return true. If not both number are postive, return false.
3. Create a function that takes, 7 number input (temperature for each day). If any of the day, exceed 90 degree, then print (it's too hot!), otherwise, print ('It's pretty cool')
4. Create a function to takes 2 number input. Return the highest number.
