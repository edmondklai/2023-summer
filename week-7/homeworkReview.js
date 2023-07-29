// (!, @, #, $)

function passwordStrengthChecker(password) {
  if (password.length >= 8) {
    let i = 0;
    while (i < password.length) {
      if (password[i] === '!' || password[i] === '@' || password[i] === '#' || password[i] === '$') {
        return true
      }
      i = i + 1
    }
    return false
  } else {
    return false
  }
}

console.log('passwordStregth: adsfkj523532', passwordStrengthChecker('adsfkj523532'))
console.log('passwordStregth: ad!32', passwordStrengthChecker('ad!32'))
console.log('passwordStregth: 23fncmljkjk4t#!', passwordStrengthChecker('23fncmljkjk4t#!'))