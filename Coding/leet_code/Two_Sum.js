/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/


//-----------------------------------------------------------------------------------------------------------//
//                                         1st attempt                                                       //      
//-----------------------------------------------------------------------------------------------------------//

const nums = [1,3,14,15,2,4,6]
const target = 7

const hashMap = new Map() // initializing a map variable / disctionary

for (let i = 0; i <= nums.length; i++) {// going with a logic of y = expected - x[i]
    let num1 = nums[i] // initial number
    let num2 = target - num1 // other expected number

    if (hashMap[num2] >= 0) { // if the index of the number in hashmap[initial number] exists where its index is in between the range of 0 to length of array
        /**
         * Here, if the value's index exists in the map variable, this code will run and send the response
         * like, if num1 = 4, 
         * then, num2 = 7 - 4 = 3 (which exists in our map) 
         * therefore, we get hashMap[num2] = hashMap[3] = 1 {3:key, 1:value}
         * as, { '1': 0, '2': 4, '3': 1, '14': 2, '15': 3 }
         * 
         */
        console.log([hashMap[num2], i])
        // return [hashMap[num2], i]
    }
    else { /*
    otherwise, we will store the value in map, as: hashMap[num1] = i ==> hashMap[1] = 0, hashMap[3] = 1
            result, Map(0) { '1': 0, '2': 4, '3': 1, '14': 2, '15': 3 }
    */ 
        hashMap[num1] = i
    }
}

//-----------------------------------------------------------------------------------------------------------//
//                                         2nd attempt                                                       //      
//-----------------------------------------------------------------------------------------------------------//

// const nums = [1,3,14,15,2,4,6]
// const target = 7

let catelog = new Map()

for (let i = 0; i < nums.length; i++) {
    let a = nums[i]
    let b = target - a

    if (catelog.has(b)/*  */)
     {
        console.log([catelog.get(b),i]) // .get() --> gets the "value" of "a key"(b) in a Map
        // return [catelog.get(b),i]
    } else {
        catelog.set(a,i) //.set() --> adds elements to a Map
        console.log(catelog)
    }
    
}


/*
Properties of Map:
- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
- A Map has a property that represents the size of the map.
------------------------------------------------------------------------------------------------
Method	    Description
new Map()	Creates a new Map object
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
clear()	    Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	    Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	    Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map
------------------------------------------------------------------------------------------------
Property	Description
size	    Returns the number of Map elements
------------------------------------------------------------------------------------------------
Read more about maps methods?             (https://www.w3schools.com/js/js_object_maps.asp)
*/
