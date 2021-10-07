function digitize(n) {
  const result = [];
  n.toString().split('').reverse().forEach(item => result.push(+item));
  return result;
}

console.log(digitize(123));


/*
function digitize(n) {

 return n.toString().split('').reverse().map(item => Number(item));

}
*/