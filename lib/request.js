const needle = require('needle');
const _ = require('lodash');

function send(payload) {
  const { fn, method, options, url } = JSON.parse(payload);
  const responseFn = _.wrap(fn, (func, err, resp, body) => {
    if (err) {
      console.log(err);
    }
    process.send(JSON.stringify(func(body)));
  });
  switch (method) {
    case 'get':
      needle.get(url, options, responseFn);
      break;
    case 'post':
      needle.post(url, payload.data, options, responseFn);
      break;
  }
}

process.on('messaage', send);
