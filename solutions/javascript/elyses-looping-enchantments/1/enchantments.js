export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((type)=>{ if(type === card) count += 1 })
  return count
}

export function determineOddEvenCards(stack, type) {
  let count = 0
  for(let card of stack){
    if (type && card % 2 === 0) count += 1
    else if(!type && card % 2 !== 0) count += 1
  }
  return count
}
