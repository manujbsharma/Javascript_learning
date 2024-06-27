// Function to find the length of the longest palindromic subsequence

//---------------------Way 1----------------------------//
let s = "bbbab"

let R = s.split('').reverse().join('');

let curr = new Array(R.length).fill(0);
let prev = new Array(R.length).fill(0);

for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= R.length; j++) {
        if (s[i - 1] === R[j - 1]) {
            curr[j] = 1 + prev[j - 1];
            // console.log(`prev[j] = ${prev[j]}`)
            // console.log(`prev[j - 1] = ${prev[j - 1]}`)
            // console.log(` 1 + prev[j - 1] = ${1 + prev[j - 1]}\n-------------------------------`)
        } else {
            curr[j] = Math.max(curr[j - 1], prev[j]);
        }
    }
    prev = [...curr];
}
console.log(curr[R.length])
// return curr[R.length];


//------------------- Way 2-----------------------//
let dp = new Uint16Array(s.length).fill(1);
let p,t;
for (let i = s.length-2; i>=0; i--) {
  p=0;
  for(let j = i+1; j<s.length; j++) {
    t=dp[j];
    dp[j] = s[i]===s[j] ? p+2 : Math.max(dp[j-1],dp[j]);
    p=t;
  }
}
console.log(dp[dp.length-1])
// return dp[dp.length-1]; 