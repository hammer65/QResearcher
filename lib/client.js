const { fork } = require('child_process');
const EventEmitter = require('events');

class Client extends EventEmitter{
  constructor(options) {
    this.request = null;
    const defaults = {
      method: 'GET'
    };
    this.options = { ...defaults, ...options };
  }

  exec() {
    this.request = fork('client.js');

  }
}
