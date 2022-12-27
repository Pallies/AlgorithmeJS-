"use strict";
function sumZero(arg) {
    let start, end = arg.length - 1;
    // O(n)
    for (start = 0; start < arg.length;) {
        if (start === end)
            break; // O(1)
        if (arg[start] + arg[end] === 0)
            return [arg[start], arg[end]]; // O(1)
        if (arg[start] + arg[end] < 0)
            start++;
        else
            end--;
    }
    return undefined;
}
function sumZeroOther(arg) {
    let start = 0, end = arg.length - 1;
    while (start < end) {
        let sum = arg[start] + arg[end];
        if (sum === 0)
            return [arg[start], arg[end]]; // O(1)
        if (sum < 0)
            start++;
        else
            end--;
    }
}
var time1 = performance.now();
let responseSum = sumZeroOther([-3, -2, -1, 0, 1, 2, 3]);
console.log("1 : " + responseSum);
responseSum = sumZeroOther([-7, -2, 0, 1, 2, 3, 4, 5, 6]);
console.log("2 : " + responseSum);
responseSum = sumZeroOther([1, 2, 3]);
console.log("3 : " + responseSum);
var time2 = performance.now();
console.log(`Time 1: ${(time2 - time1) / 1000} seconds.`);
