// Code your solutions in this file
let writeCards = (names, event) => {
    let messages = [];
    for (name of names){
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    };
    return messages
}

let countDown = integer => {
    while (integer >= 0) {
        console.log(integer)
        integer--
    } 
}