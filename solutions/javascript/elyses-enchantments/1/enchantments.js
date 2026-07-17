/*CALL ME MR. SPLICER*/

export function getItem(cards, position) {
  return cards[position]
}

export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard
  return cards
}

export function insertItemAtTop(cards, newCard) {
  /*Adding Return here breaks???*/ cards.splice(cards.length,0,newCard)
  return cards
}

export function removeItem(cards, position) {
  /*Adding Return here breaks too???*/ cards.splice(position,1)
  return cards
}

export function removeItemFromTop(cards) {
  /*Tell Me why?*/ cards.splice(cards.length-1,1)
  return cards
}

export function insertItemAtBottom(cards, newCard) {
  /*Giving up on reutrn here*/ cards.splice(0,0,newCard)
  return cards
}

export function removeItemAtBottom(cards) {
  cards.splice(0,1)
  return cards
}

export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize
}
