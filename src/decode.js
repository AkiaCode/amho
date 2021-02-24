const init = require('./mapping')

module.exports = function decode(code) {
    let map = init()
    let d = []

    for (i of code) {
        if (i.charCodeAt(0) === map[32]) { d.push(" "); continue }
        if (i.charCodeAt(0) >= 44034 && i.charCodeAt(0) <= 44100) { d.push(String.fromCharCode(Number(findKey(i, map)))); continue  }

        if (i.charCodeAt(0) > 11201) {
            if (i.charCodeAt(0) < 50000) {
                if (i.charCodeAt(0) < 40000) {
                    d.push(String.fromCharCode(Number(findKey(i, map))+(11201)))
                } else {
                    if (i.charCodeAt(0) >= 44051 && i.charCodeAt(0) <= 44200) {
                        d.push(String.fromCharCode(Number(findKey(i, map))))
                    } else {
                        if (i.charCodeAt(0) >= 45394 && i.charCodeAt(0) <= 45423) {
                            d.push(String.fromCharCode(Number(findKey(i, map))+(11201)))
                        } else {
                            if (i.charCodeAt(0) >= 49702 && i.charCodeAt(0) <= 49800) {
                                d.push(String.fromCharCode(Number(findKey(i, map))+(11201*4)))
                            } else {
                                d.push(String.fromCharCode(Number(findKey(i, map))+(11201*3)+10000))
                            }
                        }
                    }
                }
            } else {
                d.push(String.fromCharCode(Number(findKey(i, map))+(11201*4)))
            }
        } else {
            d.push(String.fromCharCode(Number(findKey(i, map))))
        }
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