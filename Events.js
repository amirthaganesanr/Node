let events = require('events');

const eventEmitter = new events.EventEmitter();

const connectionFn = () => {
    console.log('Connection Successful');
    eventEmitter.emit('data');
}

const dataFn = () => {
    console.log('Data loaded successfully');
}

eventEmitter.on('connection', connectionFn);

eventEmitter.on('data', dataFn);

eventEmitter.emit('connection');