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
  let maxProduct = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    product = array[i] * array[i + 1];

    if (product > maxProduct) maxProduct = product;
  }

  return maxProduct;
}



const removeParenth = function(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] === "(" || str[i] === ")")) newStr += str[i];
  }
  
  return newStr;
}
 


const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
