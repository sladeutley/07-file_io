#!/usr/local/bin/node

'use strict';

const { readFileSync } = require('fs');

const [,, filePath ] = process.argv;

process.stdout.write(readFileSync(filePath));

// what I put in terminal
// before chmod: node file-io.js file-io.json
// after chmod: ./file-io.js file-io.json