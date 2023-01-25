// os module = Operating system


const os = require('os');
// This is a build in function so we don't need ('./) to import module.

// info about current user.
const user = os.userInfo();
console.log(user);

//Method return the system uptime in second.
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS ={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
// So create a object veriable, setup property call name with type method from os module....... after console log result will come up.)

console.log(currentOS);