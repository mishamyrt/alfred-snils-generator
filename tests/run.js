const { validateSnils } = require('./checker')
const { exec } = require('child_process')

const getSnils = () =>
    new Promise(resolve => exec(
        './src/generate_snils.py',
        (err, stdout) => resolve(stdout.trim())
    ))

const promiseArray = (fn, count) =>
    Promise.all(Array(count).fill().map(fn))   

promiseArray(getSnils, 50)
    .then(arr => arr.map(validateSnils))
    .then(arr => arr.filter(v => v.message))
    .then(res => {
        if (res.length > 0) {
            console.log(res)
            process.exit(1)
        }
    })


