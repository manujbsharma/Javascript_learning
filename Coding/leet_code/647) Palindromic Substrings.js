
const s = "aaaaa"

// -------------------------------------------------------------------------------------------------//
//                               PRINT TOTAL NUMBER & SUB-STRINGs                                   //
// -------------------------------------------------------------------------------------------------//

let arr = new Array();

for (let i = 0; i < s.length; i++) {
    // arr.push(s[i])

    function checkPalindrome(left, right) {
        while (left > -1 && right < s.length && s[left] === s[right]) {
            arr.push(s.slice(left, right + 1))
            left--
            right++
        }
    }

    checkPalindrome(i - 1, i) //even
    checkPalindrome(i, i) //odd
}

console.log(`All the palindromic substrings are: ${arr} \nIts length is: ${arr.length}`)


// -------------------------------------------------------------------------------------------------//
//             PRINT NON REPEATED SUBSTRINGs FOR A CHARACTER WITH ITS TOTAL NUMBER                  //
// -------------------------------------------------------------------------------------------------//

let a = new Array();
j = 0

for (let i = 0; i < s.length; i++) {

    let l = i;
    let r = i;
    while (l > -1 && r < s.length && s[l] === s[r]) {
        a.push(s.slice(l, r + 1))
        l--
        r++
    }

    l = i - 1;
    r = i;
    while (l > -1 && r < s.length && s[l] === s[r]) {

        if (i === j && !a.includes(s.slice(l, r + 1))) {
            a.push(s.slice(l, r + 1))
        }
        l--
        r++
    }
    j++
}

console.log(`All the palindromic substrings are: ${a} \nIts length is: ${a.length}`)


// -------------------------------------------------------------------------------------------------//
//                          ONLY TO PRINT TOTAL NUMBER OF SUB-STRINGs                               //
// -------------------------------------------------------------------------------------------------//


let maxNum = 0

function maxPalindrom(left, right) {

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        // arry.push(s.slice(left, right + 1))
        maxNum++
        left--
        right++
    }
}

for (let i = 0; i < s.length; i++) {

    maxPalindrom(i, i) // odd string search
    maxPalindrom(i - 1, i) // even string search
}

console.log(maxNum)
//  return result