
function checkPassword(password) {
  if (password === 'strong-password') {
    return true;
  } else {
    return false;
  }
}

// console.log(checkPassword('strong-password'))
// console.log(checkPassword('bad-password'))

function positiveNumberChecker(number1, number2) {
  if (number1 > 0 && number2 > 0) {
    return true
  } else {
    return false
  }
}

console.log(positiveNumberChecker(1, 2))


