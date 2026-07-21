export function getFirstCard(deck) {
  let [a, ...rest] = deck
  return a
}

export function getSecondCard(deck) {
  let [a, b,...rest] = deck
  return b
}

export function swapTwoCards(deck) {
  let [a,b,...rest] = deck
  return [b,a]
}

export function shiftThreeCardsAround(deck) {
  let [a,b,c,...rest] = deck
  return [b,c,a]
}

export function pickNamedPile(piles) {
  let {"chosen":a,"disregard":b} = piles
  return a
}

export function swapNamedPile(piles) {
  let {"chosen":disregarded,"disregarded":chosen} = piles
  return { chosen, disregarded };
}
