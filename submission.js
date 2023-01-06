const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  const array = [1, 3, 5, 8];

const largestPair = function (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const elementAjacent = array[i + 1];
    const product = element * elementAjacent;
    const result = Math.max(...products);
    console.log(result);
  }
};

largestPair(array);
};
const array = [9, 5, 10, 2, 24, 10, 148];
function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    product = array[i] * array[i + 1];

    if (product > maxProduct) maxProduct = product;
  }
  return maxProduct;
}
console.log(adjacentElementsProduct(array));


const removeParenth = function(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] === "(" || str[i] === ")")) result += str[i];
  }
  
  return result;
}
 


const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
