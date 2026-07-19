export function randomShipRegistryNumber(min = 1000, max = 9999) {
  let registryNumber = Math.round(min + Math.random() * (max - min))
  return "NCC-" + registryNumber
}

export function randomStardate(min = 41000.0, max = 42000.0) {
  let starDate = min + Math.random() * (max - min)
  return starDate
}

export function randomPlanetClass() {
  let possibleClasses = "DHJKLMNRTY"
  let number = Math.round( Math.random() * possibleClasses.length-1)
  let planetClass = possibleClasses.at(number)
  return planetClass
}
