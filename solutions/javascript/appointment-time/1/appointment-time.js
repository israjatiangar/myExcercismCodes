export function createAppointment(days, now) {
  now = now ? new Date(now) : new Date()
  now.setDate(Number(now.getDate()) + days)
  return now
}

export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

export function getAppointmentDetails(timestamp) {
  timestamp = new Date(timestamp)
  return{
    year : timestamp.getFullYear(), //Tell me Why can't you be just NORMAL!!!! 
    month : timestamp.getMonth(),
    date : timestamp.getDate(),
    hour : timestamp.getHours(),
    minute: timestamp.getMinutes()
  }
}

export function updateAppointment(timestamp, options) {
  const current = getAppointmentDetails(timestamp)
  timestamp = new Date(
  options.year ?? current.year,
  options.month ?? current.month,
  options.date ?? current.date,
  options.hour ?? current.hour,
  options.minute ?? current.minute
  )
  return getAppointmentDetails(timestamp)
}

export function timeBetween(timestampA, timestampB) {
  timestampA = new Date(timestampA)
  timestampB = new Date(timestampB)
  return Math.round(Math.abs((timestampA-timestampB)/1000))
}

export function isValid(appointmentTimestamp, currentTimestamp) {
  appointmentTimestamp = new Date(appointmentTimestamp)
  currentTimestamp = new Date(currentTimestamp)
  return appointmentTimestamp - currentTimestamp >= 0
}
