export function createVisitor(name, age, ticketId) {
  const VISITOR = {}
  VISITOR.name = name;
  VISITOR.age = age;
  VISITOR.ticketId = ticketId;

  return VISITOR
}

export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  let result
  if (tickets[ticketId] === undefined){result = "unknown ticket id"}
  else if (tickets[ticketId] === null){result = "not sold"}
  else{ result = "sold to " + tickets[ticketId] }
  return result
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "invalid ticket !!!"
}

export function gtcVersion(visitor) {
  let contract = visitor.gtc?.version
  return contract
}
