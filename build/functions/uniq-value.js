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
console.log(uniqValue([1, 1, 1, 1, 2, 2]));
console.log(uniqValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(uniqValue([]));
console.log(uniqValue([-2, -1, -1, 0, 1]));
