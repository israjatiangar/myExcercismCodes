export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! ${age < 50 ? "What a young fellow you are." : "What a mature fellow you are."}`
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`
}

export function costOf(sign, currency) {
  return `Your sign costs ${20 + sign.length*2}.00 ${currency}.`
}