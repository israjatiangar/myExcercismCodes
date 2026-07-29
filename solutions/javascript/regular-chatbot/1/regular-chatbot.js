export function isValidCommand(command) {
  return command.match(/chatbot/i).index === 0
}

export function removeEmoji(message) {
  message = message.split(/emoji\d\d\d\d/) //Search Regex syntax on MDN
  return message.join("")
}

export function checkPhoneNumber(number) {
  if( /\(\+\d\d\).\d\d\d\-\d\d\d\-\d\d\d/.test(number)){
    return "Thanks! You can now download me to your phone." //Regex Syntax is very useful
  }
  return `Oops, it seems like I can't reach out to ${number}`
}

export function getURL(userInput) {
    return userInput.match(/\w*\.\w*/g)
}

export function niceToMeetYou(fullName) {
   return `Nice to meet you,${fullName.replace(/\w*,/ , fullName.match(/(?=\w*)/))} ${fullName.match(/\w*/)}`
}
