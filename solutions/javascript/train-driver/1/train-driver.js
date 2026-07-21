export function getListOfWagons(...a) {
  return a
}

export function fixListOfWagons(ids) {
  let [a,b,...rest] = ids
  ids = [...rest,a,b]
  return ids
}

export function correctListOfWagons(ids, missingWagons) {
  let [a,...restIds] = ids
  return [a,...missingWagons,...restIds]
}

export function extendRouteInformation(information, additional) {
  return {...information,...additional}
}

export function separateTimeOfArrival(information) {
  let {"timeOfArrival":a, ...rest} = information
  return [a,{...rest}]
}