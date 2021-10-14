function squareDigits(num){
  return parseInt(num.toString().split('').map(n => n**2).join(''));
}

console.log(squareDigits(3212));