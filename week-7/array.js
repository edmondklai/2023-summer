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

