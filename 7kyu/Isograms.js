function isIsogram(str){
  const string = str.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j ++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}


/*
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
*/