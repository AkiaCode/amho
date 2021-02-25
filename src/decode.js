const init = require('./mapping')

module.exports = function decode(code) {
    let map = init()
    let d = []

    for (i of code) {
        //TODO
    }

    let text = ''
    d.forEach(d => text += d)

    return text
}

function findKey(i, l) {
    for (const [key, value] of Object.entries(l)) {
        if (value === i.charCodeAt(0)) {
            return key
        }
    }
}