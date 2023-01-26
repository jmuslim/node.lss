const EventEmitter = require ('events') // common practice

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`All the data recived ${name} with her id: ${id}`);
})
customEmitter.on('response', () => {
    console.log(`Some other logic here`);
})
customEmitter.on('response', () => {
    console.log(`we can emitt our function or method as many time as we want`);
})


// So, line 5-13 is listening the event. line 18 is call the emit. if we call the emit first without listinening the event noting will display.

customEmitter.emit('response', 'Nabeeha', 1) // this is call emit the event.
// so without declearing any veriable we can pass the name and id not in the call back function. see avobe.