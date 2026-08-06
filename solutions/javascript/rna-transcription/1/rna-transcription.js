export const toRna = (strand) => {
  let result = ""
  let rnaComplement = {G:"C",C:"G",T:"A",A:"U"}
  for(let nuc of strand){
    result += rnaComplement[nuc]
  }
  return result
}
