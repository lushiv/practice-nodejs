const EventEmitter = require('events');
const event = new EventEmitter();

event.on('HellName', (err)=>{
    console.log('Your name is Janak')
})

event.on('HellName', (err)=>{
    console.log('Your name is Singh')
})

event.on('HellName', (err)=>{
    console.log('Your name is Raikhola')
})


event.emit('HellName')