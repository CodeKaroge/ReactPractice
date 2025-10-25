const EventEmitter = require('./eventEmitter');

const emitter = new EventEmitter();

function greetUser(name) {
    console.log(`👋 Hello, ${name}!`);
}

function sayBye(name) {
    console.log(`👋 Goodbye, ${name}!`);
}

emitter.on('greet', greetUser);
emitter.on('bye', sayBye);

emitter.emit('greet', 'Pushpendra');
emitter.emit('bye', 'Pushpendra');

emitter.on('sum', (a, b) => console.log('Sum:', a + b));
emitter.emit('sum', 5, 7);

emitter.off('greet', greetUser);
emitter.emit('greet', 'Pushpendra');

emitter.once('welcome', (user) => console.log(`🎉 Welcome, ${user}`));

emitter.emit('welcome', 'Pushpendra');
emitter.emit('welcome', 'Pushpendra');
