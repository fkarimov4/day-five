//write a function to add up the even numbers and output the total

const numbers = [5, 8, 7, 12, 13, 17, 22];

function sumEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumEvens(numbers));