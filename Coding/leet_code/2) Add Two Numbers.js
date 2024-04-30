/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/


// Linked List are also known as structured list, as the current value has the tag for next value in line.
function ListNode(val, next) { // defining a class called ListNode, with two property --> Value, refrence to the next value in list
    this.val = (val===undefined ? 0 : val) // if value for this property is not defined then assign 0 to it
    this.next = (next===undefined ? null : next) // same goes for this property
}
// RETURNS - ListNode { val: NaN, next: ListNode { val: NaN, next: null } }  

// Assume these as our Linked List
l2 = [9,8,7,6]
l1 = [1,2,3,4]

    let carry = 0 // if value exceed mmoe than 9 we will store its tenth place value to this variable, initially its value is set to 0
    
    let initial = new ListNode(0) // initiating a head node variable from ListNode class; here we defining the head node as initial (initial.next will refer to the required resultant linked list (curr))
    
    let curr = initial // making another instance of the node class object variable (initial), to store values of resultant link list

    while(l1 || l2 ) { // while we have a value avaialble for l1 and l2, this loop will run

        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry // current value of l1 + current value of l2 + current value of carry is equal to the sum 
        /**
         * Here, (l1 ? l1.val : 0) - we checking if the value for l1 present or not. 
         * If not, then mark it as 0 
         * same goes for l2
         */

        carry = Math.floor(sum / 10) // Assigning value for carry if the value is less than 10, it will remain 0

        curr.next = new ListNode(sum % 10) // creating and assigninga new node for the result value

        curr = curr.next // moving to the next node to store result for next value

        l1 = l1 ? l1.next : null // moving to the next available node for l1 link list. if not available, it will point to null
        l2 = l2 ? l2.next : null // moving to the next available node for l2 link list. if not available, it will point to null
    }

    if (carry) { curr.next = new ListNode(carry) } // if after all the iteration, we still have the value in carry we will assign it to tail node

    return initial.next // fetching the result link list while refering to the next node to variable initiated

//----------------------------------------------------------------------------------------------------------------------

// Solved same using normal Array methods and length property

// let l1 = [2, 4, 3], l2 = [4]

// let sum = 0, sumArr = []

// // console.log(`l1 elements are: ${l1} and its length is ${l1.length}\nl2 elements are: ${l2} and its length is ${l2.length}`)

// // console.log(l1.length > l2.length)

// if (l1.length > l2.length === true) {

//     for (a = l1.length - l2.length; a > 0; a--) {
//         l2.unshift(0)
//         // console.log(l2)
//     }
// }
// else if (l1.length < l2.lenth) {

//     for (a = l2.length - l1.length; a > 0; a--) {
//         l1.unshift(0)
//         // console.log(l1)
//     }
// }

// let n = l1.length;

// for (let i = n - 1; i > -1; i--) {
//     if (Number(l1[i]) + Number(l2[i]) + sum > 9) {
//         // console.log(`${Number(l1[i])} + ${Number(l2[i])} + ${sum} = ${Number(l1[i]) +  Number(l2[i]) + sum} and sumArr = ${sumArr}`)
//         sumArr.push(Number(l1[i]) + Number(l2[i]) + sum - 10)
//         // console.log(`---------------------------------------------`)
//         // console.log(`${10} - ${Number(l1[i])} + ${Number(l2[i])} + ${sum} = ${10 - Number(l1[i]) + Number(l2[i]) + sum} and sumArr = ${sumArr}`)
//         sum = 1
//         // console.log("added 1 to number")
//     }
//     else {
//         // console.log(`${Number(l1[i])} + ${Number(l2[i])} + ${sum} = ${Number(l1[i]) +  Number(l2[i]) + sum} and sumArr = ${sumArr}`)
//         sumArr.push(Number(l1[i]) + Number(l2[i]) + sum)
//     }

// }

// console.log(sumArr)
