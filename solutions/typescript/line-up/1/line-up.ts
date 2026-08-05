export function format(name:string , number:number):string {
  
  let orinalsEnds:string[] = ["st","nd","rd","th"]
  let end:string = orinalsEnds[3]
  
    if( number%10 === 1 && number%100 !== 11){end = orinalsEnds[0]}
    if(number%10 === 2 && number%100 !== 12){end = orinalsEnds[1]}
    if(number%10 === 3 && number%100 !== 13){end = orinalsEnds[2]}
  
  return `${name}, you are the ${number}${end} customer we serve today. Thank you!`
}
