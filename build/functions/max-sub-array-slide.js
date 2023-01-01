"use strict";
function maxSubArraySlide(input, window) {
    if (input.length < window)
        return null;
    let result = -Infinity;
    for (let i = 0; i + window <= input.length; i++) {
        let tmp = input.slice(i, i + window).reduce((a, b) => a + b);
        result = tmp > result ? tmp : result;
    }
    return result;
}
function maxSubArraySum(input, window) {
    if (input.length < window)
        return null;
    let result = -Infinity;
    for (let i = 0; i + window <= input.length; i++) {
        let tmp = 0;
        for (let j = 0; j < window; j++) {
            tmp += input[i + j];
        }
        if (tmp > result)
            result = tmp;
    }
    return result;
}
function maxSubArrayBest(input, window) {
    let max = 0;
    let tmp = 0;
    if (input.length < window)
        return null;
    //   calcul la somme
    for (let i = 0; i < window; i++) {
        max += input[i];
    }
    tmp = max;
    //   enleve le premier et ajoute le dernier à la somme
    for (let i = window; i < input.length; i++) {
        tmp = tmp - input[i - window] + input[i];
        max = Math.max(max, tmp);
    }
    return max;
}
console.log(maxSubArraySlide([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySlide([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySlide([4, 2, 1, 6], 1));
console.log(maxSubArraySlide([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySlide([], 4));
console.log(maxSubArrayBest([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArrayBest([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArrayBest([4, 2, 1, 6], 1));
console.log(maxSubArraySlide([4, 2, 1, 6, 2], 4));
console.log(maxSubArrayBest([], 4));
