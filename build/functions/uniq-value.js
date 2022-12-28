"use strict";
// O(n)
/** compter le nombre d'occurence dans une chaine */
function uniqValue(arg) {
    if (arg.length == 0)
        return 0;
    let result = {};
    for (let v of arg) {
        result[v] = ++result[v] || 0;
    }
    let count = 0;
    for (let k in result) {
        count++;
    }
    return count;
}
// O(log n)
/** avec deux pointeur sur une liste triée */
function uniqValuePointeur(arg) {
    let left = 0;
    let rigth = 1;
    while (rigth < arg.length) {
        if (arg[left] != arg[rigth]) {
            left++;
            arg[left] = arg[rigth];
            rigth++;
        }
        else {
            rigth++;
        }
    }
    return left == 0 ? 0 : left + 1;
}
var time1 = performance.now();
console.log(uniqValue([1, 1, 1, 1, 2, 2]));
console.log(uniqValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(uniqValue([]));
console.log(uniqValue([-2, -1, -1, 0, 1]));
var time2 = performance.now();
console.log(`Time 1: ${(time2 - time1) / 1000} seconds.`);
var time3 = performance.now();
console.log(uniqValuePointeur([1, 1, 1, 1, 2, 2]));
console.log(uniqValuePointeur([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(uniqValuePointeur([]));
console.log(uniqValuePointeur([-2, -1, -1, 0, 1]));
var time4 = performance.now();
console.log(`Time 1: ${(time4 - time3) / 1000} seconds.`);
