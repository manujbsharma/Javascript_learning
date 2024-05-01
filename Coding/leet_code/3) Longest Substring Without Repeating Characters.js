
let s = "abcabcbb"
// "abcabcbacccab"
// "pwwkew"
// "aaabcad"

//  ----------------------------------------------------------------------------------------------//
//        To copy value of one variable to another variable (not refering to other variable)      //
//------------------------------------------------------------------------------------------------//
// function copy(x) {
//     return JSON.parse( JSON.stringify(x) );
// }

//------------------------------------------------------------------------------------------------//
//               If you want to print the longest substring along with its length                 //
//------------------------------------------------------------------------------------------------//


let subSection = new Array() , reqStr = new Array(); // initiating 2 arrays

for (let i = 0; i < s.length; i++) {  // for each character of the given string
    
    let reqIndex = subSection.indexOf(s[i]); // saving the index of current character from string 
    
    if (reqIndex > -1) { // if the character is present in subStr array
        subSection.splice(0, reqIndex+1) // slice the elements till [the index of the character we are looking for] 
        /*
        Suppose, subStr = ['c','e','l','p','h','o','n','e']
        if we want to remove ['c','e','l'] --from--> ['c','e','l','p','h','o','n','e']  => ['p','h','o','n','e'] the result we want
        subStr.splice(0, 3) --> rewrite the array from initiation (0), values from 'p' to end (as its on 3rd index)
        will give => ['p','h','o','n','e']
        */
    }

    subSection.push(s[i]) // insert the current character in the end of the subStr array

    if (reqStr.length < subSection.length) { // if length of reqStr Array(required string) is smaller than subStr Array(sub string)
        // reqStr = copy(subStr) // Another way to copy.... any value from one variable to another variable [function written above]
    reqStr = subSection.slice(0) // then copy the values from subStr Array to reqStr Array
}
}
console.log(`First longest sub string in string: "${s}" is: ${reqStr.join("")}`)
console.log(`The Length od sub string is: ${reqStr.length}`)
// return reqStr.length


// -----------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------//
//               If you want to print the length of longest substring only                        //
//------------------------------------------------------------------------------------------------//

let subStr = new Array(); // initiating 2 arrays
let reqLen = 0 // initiating variable to store maximum substring length 

for (let i = 0; i < s.length; i++) {  // for each character of the given string
    
    let reqIndex = subStr.indexOf(s[i]); // saving the index of current character from string 

    if (reqIndex > -1) { // if the character is present in subStr array
        subStr.splice(0, reqIndex+1) // slice the elements till [the index of the character we are looking for] 
        /*
        Suppose, subStr = ['c','e','l','p','h','o','n','e']
        if we want to remove ['c','e','l'] --from--> ['c','e','l','p','h','o','n','e']  => to get ['p','h','o','n','e'] as the result. then,
        subStr.splice(0, 3) -->this will rewrite the array from initiation (0), values from 'p' to end (as its on 3rd index)
        will give => ['p','h','o','n','e']
        */
    }

    subStr.push(s[i]) // insert the current character in the end of the subStr array

    reqLen = Math.max(subStr.length,reqLen) // storing the longest substring length
}
console.log(`longest substring length is: ${reqLen}`)
// return reqLen

// --------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------//
//             If you want to print the length of longest substring only --Using MAP              //
//------------------------------------------------------------------------------------------------//


let x = 0;
let len = 0;
const map = new Map();

for (let j=0;j<s.length;j++) {
    const index = map.get(s[j]);
    
    if(index !== undefined && index >= x) {
        x = index + 1;
    }
    
    len = Math.max(len, j-x+1);
    map.set(s[j], j);
}

console.log(len);