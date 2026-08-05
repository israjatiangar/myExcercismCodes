export function decodedResistorValue(inputArray:["string","string","string"]) {
  
  let ColorArray:string[] = ["black","brown","red","orange","yellow",
                             "green","blue","violet","grey","white"]
  
  let result:number = 0
  
  //implemented a loop for future expansion
  
  for(let i:number = 0; i<2; i++){ 
    result += ColorArray.indexOf(inputArray[i]) * (10 ** (1-i))
  }
  
  result *= (10 ** (ColorArray.indexOf(inputArray[2])))
  
  if(result===0){return `${result} ohms` }
  if(result%1000000000===0){return `${result/1000000000} gigaohms`}
  if(result%1000000===0){return `${result/1000000} megaohms`}
  if(result%1000===0){return `${result/1000} kiloohms`}
  return `${result} ohms`
}
