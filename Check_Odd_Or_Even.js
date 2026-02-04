let num = 10;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));