s = "racecar" 
// "banana"


let startPointer = 0; // the initial character of the longest palindromic Substring
let lenghtOfLongestString = 0; // length of the longest palindromic Substring

for (let i = 0; i < s.length; i++) { // initiating the loop to check palindrom for each character
    
// function to check palindrom and store values for initial character and the length of longest palindromic substring 
    function checkPalindrome(left, right) {

        while (left > -1 && right < s.length && s[left] === s[right]) { //  while loop to check the palindrom 
        /* Here, This loop will run if all the following conditions are fulfilled: 
         * The left slider should not go lower than the first index of the provided string
         * alone with, the right slider should not go higher than the last index of the provided string
         * and, the character currently at left slider's and right slider's index should be exact same.
         */
        
        // if the above conditions works 
            if ((right - left) + 1 > lenghtOfLongestString) { // if the value of index at [(rightmost pointer - leftmost pointer) +1 (as we looking for length)] is greater than the value in lenghtOfLongestString variable...

                lenghtOfLongestString = (right - left) + 1 // then the value of (difference in index +1) will replace the current value in lenghtOfLongestString variable 
                startPointer = left // and the current leftmost character's index will be saved in startPointer variable
            }
        // If this loop runs
            left-- // decrease the index for leftmost slider, by 1
            right++ // increase the index for rightmost slider, by 1
        // to expand the range of sliders, to look for the longer  possible palindromic substring
        }
    }
// Using the defined function for two conditions like:
    checkPalindrome(i, i + 1) // If the length of palindromic substring is even
    checkPalindrome(i - 1, i + 1) // If the length of palindromic substring is odd

    
}

if (lenghtOfLongestString === 0) {// If the length of longest string still remains 0, then print the first letter of the string
    console.log(s[0])
    return s[0]
}
// Once we finish with are search throughout the whole length of provided string, we will print the result  
console.log(`the longest palindromic substring is: ${s.slice(startPointer, startPointer + lenghtOfLongestString)}\nIts length is: ${lenghtOfLongestString}`)
return s.slice(startPointer, startPointer + lenghtOfLongestString) // substring