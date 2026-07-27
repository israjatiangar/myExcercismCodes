
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage>70) {
    throw new Error("High Humidity Warning")
  }
}

export function reportOverheating(temperature) {
  if(temperature === null){
    throw new ArgumentError
  }
  if(temperature>=500){
    const customOverheat = new OverheatingError
    customOverheat.temperature = temperature
    throw customOverheat
  }
}

export function monitorTheMachine(actions) {
  try{ actions.check() }
  catch(error){
    if(error instanceof ArgumentError){ actions.alertDeadSensor() }
    else if(error instanceof OverheatingError){
      if (error.temperature > 600){actions.shutdown()}
      else{actions.alertOverheating()}
    }
    else{throw error}
  }
}
