const nums = [1,3,14,15,2,4,6]
const target = 7


const hashMap = {};

for (let i = 0; i < nums.length; i++) {// going with a logic of y = expected - x[i]
    const num1 = nums[i] // initial number
    const num2 = target - num1 // other expected number

    if (hashMap[num2] >= 0) { // if the index of the number in hashmap[initial number] exists where its index is in between the range of length of array
        /**
         * Here, if the
         */
        console.log([hashMap[num2], i])
        return [hashMap[num2], i]
    }
    else {
        hashMap[num1] = i
    }
}


