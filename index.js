const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('hello');
});

// eventEmitter.emit('tutorial');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return 'Sound check';
    }

    extracrispy() {
        console.log('I know what the aliens like');
    }
}

let halo = new Person('Chief');
halo.on('117', () => {
    console.log('Wake me when you need me');
    console.log(halo.name);
    halo.extracrispy();
});

halo.emit('117');
