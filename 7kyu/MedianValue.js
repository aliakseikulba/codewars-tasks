function median(array) {
  const sort = array.sort((a,b) => a-b);
  return (sort.length % 2) ? sort[Math.floor(sort.length / 2)]
    : (sort[sort.length / 2] + sort[(sort.length / 2) - 1])/2;
}

console.log(median([33,99,100,30,29,50]));