// CommonJS, every file is a module
// Modules - Encapsulated Code (only share the minimum) 

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

sayHi(names.john)
sayHi(names.peter)
sayHi('susan')