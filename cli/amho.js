const amho = require('../src/lib')

// node ./cli/amho.js encode "fdfsf dfs"
switch (process.argv[2]) {
    case 'encode':
        console.log("Iuput: " + process.argv[3])
        console.log("Output: " + amho.encode(process.argv[3]))
        break
    case 'decode':
        console.log("Iuput: " + process.argv[3])
        console.log("Output: " + amho.decode(process.argv[3]))
        break
    default:
        console.log("Commands List:")
        console.log("\tamho encode \"[Something]\"")
        console.log("\tㄴex) naga encode \"정님\"\n")
        console.log("\tamho decode \"[Something]\"")
        console.log("\tㄴex) naga decode \"쓳둧\"")
        break
}
