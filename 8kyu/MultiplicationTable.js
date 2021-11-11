const multiTable = (num) => {
  let result = '';
  for (let i = 1; i < 11; i++) {
    if (i === 10) {
      result += `${i} * ${num} = ${i * num}`
    } else {
      result += `${i} * ${num} = ${i * num}\n`;
    }
  }
  return result;
}
console.log(multiTable(2));