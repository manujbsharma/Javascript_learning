let nums = [0,0,0];

lst = []; // Initializing an empty array to store resultant triplets

if (nums.lenght < 3) { // Checking the lenght of array. as it should have atleast 3 elements in it
    return lst
}

/*
    Sort the array in descending order. Must add order function to sort. 
    If not we will not get the right order. Sort converts everything to a string and sorts the array by charCode. 
    Adding the order function to sort guarantees we will get the array in the proper descending order.
*/
nums.sort((a,b) => a - b ); // order function to sort numbers in ascending order 
// nums.sort((a,b) => b - a ); // order function to sort numbers in descending order 
console.log(nums)

for (let i = 0; i < nums.length - 2; i++) {

    // Skip the number we already considered 
    if(i > 0 && nums[i] === nums[i - 1]) continue // skip to next index/number
    
    poL = i + 1 // pointer index from the left end

    // We don't run the function if left pointer's value to become positive, it either can be a negative integer or 0
    if (lst[poL] > 0) { 
        break
    }

    poR = nums.length - 1 // pointer index from right end

    while (poL < poR) { // run loop until left pointer's index stays lower then right pointer's index

        if (nums[i] + nums[poL] + nums[poR] === 0) { // Situation 2: if sum of all 3 numbers is equal to 0, then store triplet into the array(lst)
            lst.push([nums[i],nums[poL],nums[poR]])
            while (nums[poL] === nums[poL+1]) {poL++} // while the value for next left pointer is equal to current one, increase left pointer index by 1. To skip the same number again
            while (nums[poR] === nums[poR+1]) {poR--} // while the value for previous right pointer is equal to current one, decrease right pointer index by 1. To skip the same number again
            poL++
            poR--
        }
        else if (nums[i] + nums[poL] + nums[poR] > 0) {// Situation 1: if sum of all 3 numbers is greater than 0, 
            poR-- // then lower the right pointer's index
        }
        else { // Situation 3: if the sum is less then 0,  
            poL++ // then increase the left pointer's index
        }
    }
}

console.log(lst); //printing or returning the result
