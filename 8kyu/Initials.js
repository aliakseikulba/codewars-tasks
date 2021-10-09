function abbrevName(name){
  const names = name.split(' ');
  const firstLetters = names.map(name => name[0].toUpperCase());
  const initials = firstLetters.join('.');
  return initials;
}