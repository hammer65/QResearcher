#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const engine = require('./plugins/prototype/index');

console.log(engine);
