/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.*/

function countPositivesSumNegatives(input) {
  if (input == null || input.length < 1){
    return [];
  }

  let result = [0,0];
  input.forEach(item => {
    if(item > 0) {
      result[0] += 1;
    } else {
      result[1] += item;
    }
  })
  return result;
}