/**
 * ENUNS or Enumeration
 * const INITIALSED = "initialised"
 * Ticket status ["initialised", "cancelled", "resolved", "pending"]
 * 
 * ti.status == "resolved"
 * 
 */
enum Ticketstatus {
    INITIALSED = "initialised",
    CANCELLED = "cancelled",
    PENDING = "pending",
    CLOSED = "closed"
}

enum TicketStatus{ //you can make also enum value as a string
    INTIALIZED,
    PENDING,
    SUCCESFUL,
    CLOSED        
}
const Ticket={
    id:"1",
    detail:'2',
    status:TicketStatus.INTIALIZED


}
//console.log(TicketStatus.INTIALIZED)
console.log(Ticket)
enum statuscode{
    Notfound=401,
    succeed=200,
    accepted=501,
    created=402
}
const respons={
    url:"www.google.com",
    data:"something",
    type:"get",
    STATUS:statuscode.succeed
}
console.log(respons)
