function highAndLow(numbers){
  let nums = numbers.split(' ');
  console.log(nums);
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let result = `${max} ${min}`;
  console.log(result);
  return result;
}
highAndLow('1 2 3 4 5 6 7');