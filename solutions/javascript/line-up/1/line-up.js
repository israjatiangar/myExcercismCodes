export const format = (_name, _number) => {
    let _ending = "th"
    let _lastdigit = _number
    while(_lastdigit>100){
      _lastdigit -= 100
    }
    while(_lastdigit>10){
      _lastdigit -= 10
    }
    if(_number - _lastdigit !== 10 && _number - _lastdigit !== 110){
      if(_lastdigit === 1) _ending = "st"
      if(_lastdigit === 2) _ending = "nd"
      if(_lastdigit === 3) _ending = "rd"
    }
  let _sentence = _name + ", you are the " + _number +
    _ending + " customer we serve today. Thank you!"
  return _sentence
};
