const init = require('./mapping')

module.exports = function encode(code) {
    let map = init()
    let e = []

    for (i of code) {
        if (1 <= i.charCodeAt(0) && i.charCodeAt(0) <= 32) { e.push(i); continue }

        if  (map[i.charCodeAt(0)-(11201*4)] != undefined) {
            e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*4)]))
        } else {
            if  (map[i.charCodeAt(0)-(11201*3)] != undefined) {
                e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*3)]))
            } else {
                if  (map[i.charCodeAt(0)-(11201)] != undefined) {
                    e.push(2 + String.fromCharCode(map[i.charCodeAt(0)-(11201)]))
                } else {
                    e.push(2 + String.fromCharCode(map[i.charCodeAt(0)+(2222)]))
                }
            }
        }
    }

    let text = ''
    e.forEach(e => text += e)

    return text
}
