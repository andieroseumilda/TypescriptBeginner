function filterByNumber(arr) {
  return arr.splice(1, 2);
}

var array = [1, 'a', 'b', 2];
var numberArr = filterByNumber(array);

for (let i = 0; i < numberArr.length; i++) {
  console.log(numberArr[i]);
  console.log(typeof numberArr[i] == Boolean);
  console.log(typeof numberArr[i]);
}

// Display 1, 2
// Array contains boolean
// Array has data types

function average(a, b) {
  return (a + b) / 2;
}

console.log(average(2, 1));
