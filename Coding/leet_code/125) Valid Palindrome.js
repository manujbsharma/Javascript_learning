// let s = "A man, a plan, a canal: Panama"
let s = "Race A Car"
const sO = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
const sR = sO.split("").reverse().join("")
    // return sO === sR

console.log(`Original String: ${sO}`)
console.log(`Reversed String: ${sR}\n`)
console.log(`The provided string is palindrom?\n${sO === sR}`)