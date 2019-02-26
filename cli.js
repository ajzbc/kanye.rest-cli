#!/usr/bin/env node
const fetch = require('node-fetch');

fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(json => console.log(json.quote));