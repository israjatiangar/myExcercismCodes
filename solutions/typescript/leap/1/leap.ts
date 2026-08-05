export function isLeap(year:number) {
  if(year % 4 === 0){return (year % 100 !== 0 ) || (year % 400 === 0)}
  else{return false}
}
