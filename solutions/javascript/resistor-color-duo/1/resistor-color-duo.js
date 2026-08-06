export const decodedValue = (inputArray) => {
  let result = 0
  for(let i = 0; i<2;i++){
    result += ColorArray.indexOf(inputArray[i]) * (10 ** (1-i) )
  }
  return result
};
export const ColorArray = ["black","brown","red","orange","yellow",
                      "green","blue","violet","grey", "white"]
