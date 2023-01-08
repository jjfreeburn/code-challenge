const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


const findFrequency = function(array) {
  let maxMinFrequency = {
    most: "",
    least: "",
  };
  let maxCount = 0;
  let minCount = array.length;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      maxMinFrequency.most = array[i];
    }
    if (count < minCount) {
      minCount = count;
      maxMinFrequency.least = array[i];
    }
  }
  return maxMinFrequency;
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



const removeparenth = function (str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] === "(" || str[i] === ")")) newStr += str[i];
  }

  return newStr;
};
 


const scoreScrabble = function(str) {
  let alphabetScore = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  };
  let sum = 0;
  for (i = 0; i < str.length; i++) {
    sum += alphabetScore[str[i]];
  }
  return sum;
};
