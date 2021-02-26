const init = require('./mapping')

module.exports = function decode(code) {
    let d = []
    let number = false

    for (i of code) {
        if (i === ' ' || i === '\n') { d.push(i); continue }

        if  (Number(i) === 2) {
            number = true
            continue
        }

        if (number == true) {
            if (45423 >= Number(i.charCodeAt(0))) {
                d.push(String.fromCharCode(Number(i.charCodeAt(0))-32801))
            } else {
                d.push(String.fromCharCode(Number(i.charCodeAt(0))-46224))
            }
            number = false
        } else {
            if (55202 >= Number(i.charCodeAt(0)) && Number(i.charCodeAt(0)) >= 54431) {
                d.push(String.fromCharCode(Number(i.charCodeAt(0))-10399))
            } else {
                d.push(String.fromCharCode(Number(i.charCodeAt(0))+802))
            }
        }
    }

    let text = ''
    d.forEach(d => text += d)

    return text
}

function findKey(i) {
    let map = init()

    for (const [key, value] of Object.entries(map)) {
        if (value === i.charCodeAt(0)) {
            return key
        }
    }
}