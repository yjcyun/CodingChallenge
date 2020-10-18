function linearSearch(arr, element) {
  let index = 0;
  for (let item of arr) {
    if (item === element) {
      return index;
    }
    index++;
  }
}

// If the element is an object
function linearSearch(arr, element, comparatorFn) {
  let index = 0;
  for (let item of arr) {
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++;
  }
}

// Using find()
const arr = [5, 3, 10, -10, 33, 51];

arr.findIndex(el => el === 5);

console.log(linearSearch(arr, 10));

const objects = [
  { name: 'Mars', age: 3 },
  { name: 'Chester', age: 2 }
];

console.log(linearSearch(objects, { name: 'Mars', age: 3 }, function (el, it) {
  return el.name === it.name;
}))

// Linear search works on ordered and unordered lists and checks all items until it finds the element you're searching