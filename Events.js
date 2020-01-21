let events = require('events');

const eventEmitter = new events.EventEmitter();

const connectionFn = () => {
    console.log('Connection Successful');
    eventEmitter.emit('data');
}
const connectionFn2 = () => {
    console.log('Connection Successful for second event');
}

const dataFn = () => {
    console.log('Data loaded successfully');
}

//Every time event is bound with the function, it chains the function and repeats it
eventEmitter.on('connection', connectionFn);
eventEmitter.on('connection', connectionFn2);
eventEmitter.addListener('connection', connectionFn);

console.log('List of listeners for connection event \n',eventEmitter.listeners('connection'));
eventEmitter.on('data', dataFn);

eventEmitter.emit('connection');