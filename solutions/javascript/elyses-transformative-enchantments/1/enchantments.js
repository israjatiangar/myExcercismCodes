export function seeingDouble(deck) {
  return deck.map((card) => card*2)
}

export function threeOfEachThree(deck) {
  return deck.reduce((accumulator, card) => {
      if(card === 3){
        accumulator.push(card)
        accumulator.push(card)
      }
      accumulator.push(card)
      return accumulator
    },[])
}

export function middleTwo(deck) {
  return deck.slice(4,6)
}

export function sandwichTrick(deck) {
  return [...deck.slice(1,deck.length/2),
          ...deck.slice(-1),
          ...deck.slice(0,1),
          ...deck.slice(deck.length/2, deck.length-1)
         ]
}

export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

export function perfectlyOrdered(deck) {
  return deck.sort((m,n) =>{
    if(m>n) return 1
    else if(m===n) return 0
    else if(m<n) return -1
  })
}

export function reorder(deck) {
  return deck.reverse()
}
