//1//
//1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.//
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumofevens = sumevennumbers(Numbers);
const sumofodds = sumoddnumbers(Numbers);
function sumevennumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
function sumoddnumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log("-----------------------------");
console.log("Answer of even");
console.log(sumofevens);
console.log("-----------------------------");
console.log("Answer of odd");
console.log(sumofodds);
//1 end//
//2. Write a function that takes a string as input and returns the number of vowels in the string.//
//2 start//
function countvowels(str) {
  const vowels = "aeiouAEIOU"; 
  let count = 0; 
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
     
      count++; 
    }
  }
  return count; 
}

const inputStr = 'hi from Muzammil Ansari:)';
const vowelCount = countvowels(inputStr);
console.log("-----------------------------");
console.log(vowelCount); 
console.log("Answer of 2");
//2 end//
//3//
//3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.//
function findLongestString(arr) {
  let maxLength = 0; 
  for (let i = 0; i < arr.length; i++) {
    const currentLength = arr[i].length; 
    if (currentLength > maxLength) {
     
      maxLength = currentLength; 
    }
  }
  return maxLength; 
}
const strings = ["apple", "banana", "cherry", "date", "fig", "grapefruit" , "mangoloverhere"];
const longestStringLength = findLongestString(strings);
console.log("-----------------------------");
console.log(longestStringLength); 
console.log("Answer of 3");
//3 end//
//4//
//4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.//
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum / arr.length; 
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = calculateAverage(number);
console.log("-----------------------------");
console.log(average); 
console.log("Answer of 4");
//4//
//5//
//5. Write a function that takes an object as input and returns an array of all the keys in the object.//
function getObjectKeys(obj) {
  return Object.keys(obj);
}
function getObjectKeys(obj) {
  return Object.keys(obj);
}

const myObject = { name: "John", age: 30, city: "New York" };
const keysArray = getObjectKeys(myObject);
console.log("-----------------------------");
console.log(keysArray); 
console.log("Answer of 5");
//5//
//6//
//6. Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.//
function getValuesForKey(arr, key) {
  const valuesArray = []; 
  for (let i = 0; i < arr.length; i++) {
    if (key in arr[i]) {
      
      valuesArray.push(arr[i][key]);
    }
  }
  return valuesArray; 
}

const MYArray = [
  { name: "muzammilansari", age: 18 },
  { name: "haseeb", age: 21 },
  { name: "rao", age: 19 },
  { name: "wasif", age: 20}
];
const valuesArray = getValuesForKey(MYArray, "age");
console.log("-----------------------------");
console.log(valuesArray);
console.log("Answer of 6");
//6//
//7//
//7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.//
function getProduct(arr) {
  let product = 1; 
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]; 
  }
  return product;
}

const myArray = [2, 3, 4, 5];
const product = getProduct(myArray);
console.log("-----------------------------");
console.log(product); 
console.log("Answer of 7");
//7 end//
