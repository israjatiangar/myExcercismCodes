export function decodedValue(inputArray:string[]) {
  let colorArray:string[] = ["black","brown","red","orange","yellow",
                         "green","blue","violet","grey","white"]
  let result:number = 0
  for(let i:number = 0;i<2;i++){
    result += colorArray.indexOf(inputArray[i]) * (10**(1 - i))
  }
  return result
}
