export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase()
  let alphabets = "abcdefghijklmnopqrstuvwxyz"
  for (let letter of alphabets){
    if(!sentence.includes(letter)){
      return false;
    }
  }
  return true;
};
