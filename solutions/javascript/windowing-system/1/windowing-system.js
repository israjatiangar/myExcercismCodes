
export function Size(width = 80,height = 60){
  this.width = width
  this.height = height
  this.resize = (newWidth, newHeight) => {
    this.width = newWidth
    this.height = newHeight
  }
}

export function Position(x = 0, y = 0){
  this.x = x
  this.y = y
  this.move = (newX,newY) => {
    this.x = newX
    this.y = newY
  }
}
export function ProgramWindow(){
  this.screenSize = new Size(800,600)
  this.size = new Size()
  this.position = new Position()
  this.resize = (newSize) =>{
    let w = newSize.width > 0 ? newSize.width: 1
    let h = newSize.height > 0 ? newSize.height : 1
    w = w + this.position.x > this.screenSize.width ? this.screenSize.width - this.position.x : w
    h = h + this.position.y > this.screenSize.height ? this.screenSize.height - this.position.y : h
    this.size.resize(w,h)
  }
  this.move = (newPosition) => {
    let x = newPosition.x > 0 ? newPosition.x : 0
    let y = newPosition.y > 0 ? newPosition.y : 0    
    x = x > this.screenSize.width - this.size.width ? this.screenSize.width - this.size.width : x 
    y = y > this.screenSize.height - this.size.height ? this.screenSize.height - this.size.height : y 
    this.position.move(x,y)
  }
}
export function changeWindow(newProgramWindow, w = 400, h = 300, x = 100, y = 150){
  
  //I some how did this, i still dont understand but i did???
  //Didn't use AI, had to watch videos,
  //soooooo many typos and little tiny mistakes made my life hell.
  //I wish js would tell me why it throws undefined,
  //like where, which step. Anyway i did it.
  
  const newSize = new Size(w,h)
  const newPosition = new Position(x,y)
  newProgramWindow.resize(newSize)  
  newProgramWindow.move(newPosition)  
  return newProgramWindow
}