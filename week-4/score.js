function checkScore1(score) {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

function checkScore2(score) {
  if (score <= 59) {
    return 'F'
  } else if (score <= 69) {
    return 'D'
  } else if (score <= 79) {
    return 'C'
  } else if (score <= 89) {
    return 'B'
  } else {
    return 'A'
  }
}

function checkScore3(score) {
  if (score <= 100 && score >= 90) {
    return 'A'
  } else if (score < 90 && score >= 80) {
    return 'B'
  } else if (score < 80 && score >= 70) {
    return 'C'
  } else if (score < 70 && score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(checkScore1(89))
console.log(checkScore2(89))
console.log(checkScore3(89))