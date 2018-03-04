const { fork } = require('child_process');
const EventEmitter = require('events');

class Client extends EventEmitter{
  constructor(options) {
    super();
    this.setResponse = this.setResponse.bind(this);
    this.request = null;
    this.response = null;
    const defaults = {
      method: 'GET'
    };
    this.options = { ...defaults, ...options };
    this.request = fork('request.js');
    this.request.on('message', this.setResponse);
  }

  setResponse(msg) {
    this.response = msg;
    this.emit('response', this);
  }

  exec() {
    this.request.send(this.request);
  }
}
