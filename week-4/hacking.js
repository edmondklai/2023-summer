const passwordFromDatabase = 1022

function passwordChecker(password) {
  if (password === passwordFromDatabase) {
    return true
  } else {
    return false
  }
}

let password = 0
while(true) {
  console.log('trying...', password);
  const hacked = passwordChecker(password);

  if (hacked) {
    console.log('I hacked your password');
    break;
  }
  password = password + 1;
}