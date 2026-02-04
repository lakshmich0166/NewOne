let num = 10;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let str = "JavaScript";
let reversed = str.split("").reverse().join("");

console.log(reversed);
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));