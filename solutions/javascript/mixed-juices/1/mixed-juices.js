export function timeToMixJuice(name) {
  name = name.toLowerCase()
  switch(name){
    case "pure strawberry joy": return 0.5
    case "energizer": //waterfall
    case "green garden": return 1.5
    case "tropical island": return 3
    case "all or nothing" : return 5
    default: return 2.5
  }
}


export function limesToCut(wedgesNeeded, limes) {
  let limesNeeded = 0
  while(wedgesNeeded>0 && limes.length>0){
    wedgesNeeded-=cutLimes(limes[0])
    limes.shift()
    limesNeeded++
  }
  return limesNeeded
  
  function cutLimes(_limeSize) {
    _limeSize = _limeSize.toLowerCase()
    switch(_limeSize){
      case "small": return 6
      case "medium": return 8
      case "large": return 10
      default: return 0
    }
  }
}

export function remainingOrders(timeLeft, orders) {
  while(timeLeft>0 && orders.length>0){
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  }
  return orders
}
