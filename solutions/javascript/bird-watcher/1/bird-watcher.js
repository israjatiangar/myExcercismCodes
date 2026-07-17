export function totalBirdCount(birdsPerDay) {
  let birdsCounted = 0
  for(let _i = 0; _i < birdsPerDay.length;_i++){
    birdsCounted += birdsPerDay[_i]
  }
  return birdsCounted
}

export function birdsInWeek(birdsPerDay, week) {
  let birdCountWeek = 0
  let WeekStart = (week - 1)* 7
  for(let _i = WeekStart; _i < WeekStart + 7;_i++){
    birdCountWeek += birdsPerDay[_i]
  }
  return birdCountWeek
}

export function fixBirdCountLog(birdsPerDay) {
  let frequency = 2
  for(let _i = 0; _i <= birdsPerDay.length; _i++){
    if(_i % frequency == 0){
      birdsPerDay[_i] += 1
    }
  }
}
