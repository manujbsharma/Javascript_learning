s = "ecba"
// "aaaaaaabbbaaaacc"
// "eceba"

if (s.length < 3) { // if the string size is less than 3 
    console.log(`length of the string: ${s} is ${s.length}`)
    return s.length // return its length (the code below won't run)
}


let cnt = new Map(); // initiated a new map object to store the values (between the start pointer and end pointer)
let startPoint = 0; // starting pointer 
let max = 0 // storing the maximum length
let resultantStr = ""; // (optional) to store the desired longest sub-string

for (let endPoint = 0; endPoint < s.length; endPoint++) { // starting the end pointer
    
    if (!cnt.get(s[endPoint])) { cnt.set(s[endPoint], 1) } // If the current letter doesn't exist in Map, add current letter inside the Map with count as 1 --> {e:1} at s[0] 
    else { cnt.set(s[endPoint], cnt.get(s[endPoint]) + 1) } // if current letter exists, increase the count of existing value by 1

    while (cnt.size > 2) { // while the size of Map is more than 2

        if (cnt.get(s[startPoint]) > 1) { // if the value is more than 1 for the letter at starting pointer index(initially 0) (from s string). 
            cnt.set(s[startPoint], cnt.get(s[startPoint]) - 1) // decrease its count by 1 
        }
        else {
            cnt.delete(s[startPoint])// else if the count is 1, delete the letter
        }
        startPoint++ // increase the value of start pointer by 1

        /* THE LOGIC FOR SLIDING WINDOW 
         * This while loop works as a sliding window to maintain the size of Map as 2.
         *  if size of map becomes more than 2. (if it holds more than 2 letters at a time ) 
         * It will remove the letter (if its count is 1) OR decrease the count of letter (at starting pointer index from s string)
         */
    }

    if ((endPoint - startPoint) + 1 > max) { // if the number of letter are more than the value in max variable....
        resultantStr = s.slice(startPoint, endPoint + 1) // place the sub string inside the resultantStr variable
    }

    max = Math.max(max, (endPoint - startPoint) + 1) // update the value in max variable by comparing the maximum value between [(number of letters of substring) & current value of max variable ]
}

console.log(max)
console.log(resultantStr)

return max;


