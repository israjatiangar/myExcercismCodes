export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""))
}

export function luckyNumber(value) {
  value = String(value).split("")
  while(value.length >= 1 ){
    if(firstEqualsLast(value)){
      value.shift()
      value.pop()
    }else{return false}
  }
  return true
  
  function firstEqualsLast(_arr){
    return _arr[0] === _arr[_arr.length-1]
  }
}


export function errorMessage(input) {
  if(input === undefined || input === null || input === ""){
    return "Required field"
  }
  input = Number(input)
  if(!input ){return "Must be a number besides 0"}
  else{return ""}
}
