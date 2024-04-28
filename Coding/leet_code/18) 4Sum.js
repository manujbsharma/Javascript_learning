
/*
    Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target
    You may return the answer in any order.

    

    Example 1:

    Input: nums = [1,0,-1,0,-2,2], target = 0
    Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    Example 2:

    Input: nums = [2,2,2,2,2], target = 8
    Output: [[2,2,2,2]]
*/

let nums = [2, 2, 2, 2, 2]
let target = 8

let lst = new Array() // initiating an array

if (nums.length < 4) { // if they length of array is less than 4 then return empty array
    // console.log(lst)
    return lst
}

// Otherwise, sort the array
nums.sort((a, b) => a - b)


for (let i = 0; i < nums.length - 3; i++) { //converting 4D problem to 3D problem by making the 1st value static
    
    // OPTIMIZING THE SEARCH
    if (i > 0 && nums[i] === nums[i - 1]) continue // skip to the next value, if any of the value repeat itself (after sorting) 
    if (nums[i] * 4 > target) break // if the 4 times (the value of "i"th index) is greater than the target value. then terminate the function.
    if (nums[i] + nums[nums.length - 1] * 3 < target) continue // if the sum of (current number and 3 times [the last number]) is lesser than the target number. skip to next number


    for (let j = i + 1; j < nums.length - 2; j++) { //converting 3D problem to 2D problem by making the 1st value static
        
        // OPTIMIZING THE SEARCH
        if (j > i + 1 && nums[j] === nums[j - 1]) continue // skip to the next value, if any of the value repeat itself (after sorting) 
        if (nums[i] + nums[j] * 3 > target) break // if the sum of ("i"th index value and 3 times [the "j"th index value]) is greater than the target value. then terminate the function.
        if (nums[i] + nums[j] + nums[nums.length - 1] * 2 < target) continue // if the sum of (current number for i and j, and 2 times [the last number]) is lesser than the target number. skip to next number

        // INITIATING 2 pointers, left & right (converting)
        let left = j + 1; right = nums.length - 1

        while (left < right) { // Until left pointer index stay lower then right side index, run the while loop
            const sum = nums[i] + nums[j] + nums[left] + nums[right] // storing the sum of all the 4 suitable numbers

            if (sum < target) { left++ } // If the sum is lesser than the target value. then, increase the left pointer by 1
            else if (sum > target) { right-- } // If the sum is greater than the target value. then, decrease the right pointer by 1
            else { // If the sum of values is equal to target value, 
                lst.push([nums[i], nums[j], nums[left], nums[right]]) // store the array of four values into the "lst" Array

                left++ // move to the next value for left pointer (left+1)
                right-- // move to the next value for right pointer

                while (nums[left] === nums[left - 1]) { left++ } // if the value of (left pointer increased by 1) left+1 is equal to value of (current pointer)left, then increase (left+1)pointer by 1
                while (nums[right] === nums[right + 1]) { right-- } // if the value of (left pointer decreased by 1) right-1 is equal to value of (current pointer)right, then decrease (right-1)pointer by 1

            }
        }
    }
}

console.log(lst) // Checking the desired result by printing the values in lst array