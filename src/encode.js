const init = require('./mapping')

module.exports = function encode(code) {
    let map = init()
    let e = []

    for (i of code) {
        if (i.charCodeAt(0) > 11201) {
            if (i.charCodeAt(0) > 50000) {
                e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*4)]))
            } else {
                if (i.charCodeAt(0) > 40000) {
                    e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*3)-10000]))
                } else {
                    e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201)]))
                }
            }
        } else {
            e.push(String.fromCharCode(map[i.charCodeAt(0)]))
        }
    }

    let text = ''
    e.forEach(e => text += e)

    return text
}