// You get any card as an argument. Your task is to return a suit of this card.
function defineSuit(card) {
  if(card.includes('♣')) {
    return 'clubs';
  }
  if (card.includes('♦')) {
    return 'diamonds';
  }
  if (card.includes('♥')){
    return 'hearts';
  }
  if(card.includes('♠')) {
    return 'spades';
  }
}