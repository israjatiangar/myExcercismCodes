export function translate2d(dx, dy){
  let x = 0
  let  y = 0
  
  return function incrementCoordinates(x,y){
    x += dx
    y += dy
    let arr = [x,y]
    return arr
  }
  
}

export function scale2d(sx, sy) {
  let scaleX = 0
  let scaleY = 0
  return function(scaleX,scaleY){
    scaleX *= sx
    scaleY *= sy
    let arr = [scaleX,scaleY]
    return arr
  }
}

export function composeTransform(f, g) {
  return function(x,y){
    let [someX,someY] = f(x,y)
    return g(someX,someY)
  }

}

export function memoizeTransform(f) {
  let lastX, lastY, lastResult
  return function(x,y){
    if (x === lastX && y === lastY){return lastResult}

    lastX = x;
    lastY = y;
    lastResult = f(x,y)
    return lastResult
  }
  
}
