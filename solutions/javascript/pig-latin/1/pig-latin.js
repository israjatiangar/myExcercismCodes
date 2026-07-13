//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const translate = (_phrase) => {
  let _checklist = ["a","e","i","o","xr","yt"]
  _phrase = _phrase.split(" ")
  let _spc = ""
  let _pigLatin = []
   for (let _word of _phrase) {
     
    if(_word.match("qu")<1){
      _checklist.push("u")
    }
    if(!_word.startsWith("y")){
      _checklist.push("y")
    }
    while (!hasThisAtStart(_word,_checklist)) {
      _word = _word.slice(1) + _word.slice(0,1)
    }
    _pigLatin.push(_word + "ay")
  }
  
  return _pigLatin.toString().replaceAll(","," ")
  
  function hasThisAtStart(_word,_these) {
    for (let _this of _these) {
      if(_word.startsWith(_this)){return true}
    }
    return false
  }  
}
