// CommosnJS, every file in node is a module (it's by default)
//Modules - Encapsulated Code (only share minimum {only share what we want} )

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor'); // the data name is upto me.

require('./7-mind-grenade'); // Check details on the 7th file.

//console.log(data);
//console.log(name)

sayHi('Jannatul')
sayHi('Nabeeha')
sayHi('Ayeedah')