function disemvowel(str) {
  str = str.replace( /[aeiou]/gi, '' ); //выбираем все гласные и заменяем на пустую строку методом replace
  return str;
}