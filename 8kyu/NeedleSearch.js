/*
* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:*/

function findNeedle(haystack) {
  let result;
  haystack.forEach((item, index)=> {
    if(item === 'needle') {
      result = `found the needle at position ${index}`
    }
  });
  return result;
}

/*
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
*/