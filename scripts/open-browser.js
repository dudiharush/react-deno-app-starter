const open = require('open');

(async () => {
    await open('http://localhost:8000');
})()

console.log('opening browser...')