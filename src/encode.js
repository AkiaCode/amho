const init = require('./mapping')

module.exports = function encode(code) {
    let map = init()
    let e = []

    for (i of code) {
        if (i === '\n') { continue }

        if  (map[i.charCodeAt(0)-(11201*4)] != undefined) {
            e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*4)]))
        } else {
            if  (map[i.charCodeAt(0)-(11201*3)] != undefined) {
                e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201*3)]))
            } else {
                if  (map[i.charCodeAt(0)-(11201)] != undefined) {
                    e.push(String.fromCharCode(map[i.charCodeAt(0)-(10000)]) + 1)
                    e.push(String.fromCharCode(map[i.charCodeAt(0)-(11201)]) + 2)
                } else {
                    e.push(String.fromCharCode(map[i.charCodeAt(0)+(1111)]) + 3)
                    e.push(String.fromCharCode(map[i.charCodeAt(0)+(2222)]) + 4)
                    e.push(String.fromCharCode(map[i.charCodeAt(0)]))
                    //console.log(i, i.charCodeAt(0), map[i.charCodeAt(0)])
                }
            }
        }
    }

    let text = ''
    e.forEach(e => text += e)

    return text
}
