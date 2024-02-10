// Exercise 3 Anugrah Abrar Daffa

// Number 1

let number = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`- ${number} x ${i}`);
}

// Number 2

let string = "madam";
let container = "";
console.log(container);
for (let i = string.length - 1; i >= 0; i--) {
  container += string[i];
}

if (container === string) {
  console.log("The word is Palindrome");
} else {
  console.log("The word isn't Palindrome");
}

// Number 3

let centimeter = 100000;

let km = centimeter / 100000;

console.log(km);

// Number 4

let numCurr = "152345";
let curr = "Rp. ";

for (let i = 0; i < numCurr.length; i++) {
  if (
    numCurr.slice(i).length % 3 === 0 &&
    numCurr.slice(i).length >= 3 &&
    i != 0
  ) {
    curr += ".";
  } else {
    if (curr[curr.length - 1] === ".") {
      curr += numCurr[i - 1];
    }
    curr += numCurr[i];
  }
}

console.log(curr);

// Number 5

let string2 = "Hello World";
let occur = "ell";
let result = string2.replace(occur, "");
console.log(result);

// Number 6
let string3 = "hello world";
let result2 = "";

for (let i = 0; i < string3.length; i++) {
  if (i === 0) {
    result2 += string3[i].toUpperCase();
  } else if (string3[i] === " ") {
    result2 += ` ${string3[i + 1].toUpperCase()}`;
    i++;
  } else {
    result2 += string3[i];
  }
}

console.log(result2);

// Number 7
let string4 = "hello";
let result3 = "";

for (let i = string4.length - 1; i >= 0; i--) {
  result3 += string4[i];
}

console.log(result3);

// Number 8
let string5 = "The QuiCk BrOwN Fox";
let result4 = "";

for (let i = 0; i < string5.length; i++) {
  if (string5[i].toUpperCase() == string5[i]) {
    result4 += string5[i].toLowerCase();
  } else {
    result4 += string5[i].toUpperCase();
  }
}

console.log(result4);

// Number 9
let num1 = 11;
let num2 = 27;

if (num1 > num2) {
  console.log("Num 1 greater than num 2");
} else {
  console.log("Num 2 greater than num 1");
}

// Number 10

let number1 = 42;
let number2 = 27;
let number3 = 18;

let resultNum = "";
if (number1 < number2 && number1 < number3) {
  
}

// Number 11

let inputData = true;
let resultInput = 0;
if (typeof inputData === "string") {
  resultInput = 1;
} else if (typeof inputData === "number") {
  resultInput = 2;
} else {
  resultInput = 3;
}

console.log(
  `Type of data ${inputData} is ${typeof inputData} -> ${resultInput}`
);

// Number 12
let string6 = "An Apple a day keeps the Doctors away";
let changed = "a";
let resultChange = "";

for (let i = 0; i < string6.length; i++) {
  if (string6[i].toLowerCase() === changed) {
    resultChange += "*";
  } else {
    resultChange += string6[i];
  }
}

console.log(resultChange);
