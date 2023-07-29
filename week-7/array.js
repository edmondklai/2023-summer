// push

const students = ['Jimmy', 'David', 'Haozhi'];
students.push('Ed')
// pop
const firstPop = students.pop();
console.log(firstPop)

students.pop()
// shift
const firstShift = students.shift()
console.log(firstShift)

// unshift 
students.unshift('Tiffany')
console.log(students)


const testAry = [3, 6, 8];
// 1
function addValue(ary, n) {
  ary.push(n)
  return ary
}

console.log(addValue(testAry, 4))

function removeLastValue(ary) {
  ary.pop()
  return ary
}

console.log(removeLastValue(testAry))

function removeFirstValue(ary) {
  ary.shift()
  return ary
}

console.log(removeFirstValue(testAry))

function prependValue(ary, n) {
  ary.unshift(n)
  return ary
}

console.log(prependValue(testAry, 10))


function modifyArray(inputAry) {
  inputAry.shift()
  inputAry.unshift('JavaScript')
  inputAry.pop()
  inputAry.push('Programming')
  return inputAry
}

console.log(
  modifyArray(['purple', 3, true])
)


const arr1 = ['Java', 2, 3];
const arr2 = [true, 5, 'Coffee'];
const arr3 = arr2.concat(arr1)
console.log(arr3.length)

const arr4 = ['Jimmy', 'David', 'Haozhi', 'Ed']
console.log(arr4.join(' '))

// 1. mergeArrays
function mergeArrays(ary1, ary2) {
  return ary1.concat(ary2)
}

// 2
function aryToString(ary1) {
  return ary1.join(',')
}

function joinWithHyphen(ary1) {
  return ary1.join('-')
}

// join and concat
function joinAndConcat(ary1, ary2) {
  const ary3 = ary1.concat(ary2)
  return ary3.join(' ')
}

joinAndConcat(['a', 'b', 'c'], ['d', 'e'])

function multiConcat(aryOfArys) {
  let ary = []
  for (let i = 0; i < aryOfArys.length; i = i + 1) {
    ary = ary.concat(aryOfArys[i]);
  }
  return ary
}

console.log('multi', multiConcat([[1, 2], [3, 4]]))


const aryOfArrays = [
  [1, 3],
  [3, 5]
]