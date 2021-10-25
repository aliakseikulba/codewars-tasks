function solution(number){
  let res = 0;
  for (let i = 0; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      res += i;
    }
  }
  return res;
}