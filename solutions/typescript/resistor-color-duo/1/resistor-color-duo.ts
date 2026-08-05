export function decodedValue(inputArray:string[]) {
  let result:number = 0
  for(let i:number = 0;i<2;i++){
    result += matchBandToNumber(inputArray[i]) * (10**(1 - i))
  }
  return result

  function matchBandToNumber(band:string):number{
    let returnNumber:number = 0
    switch(band){
      case "black": returnNumber = 0; break
      case "brown" : returnNumber = 1; break
      case "red" : returnNumber = 2; break
      case "orange" : returnNumber = 3; break
      case "yellow" : returnNumber = 4; break
      case "green" : returnNumber = 5; break
      case "blue" : returnNumber = 6; break
      case "violet" : returnNumber = 7; break
      case "grey" : returnNumber = 8; break
      case "white" : returnNumber = 9; break
    }
     return returnNumber
  }
}
