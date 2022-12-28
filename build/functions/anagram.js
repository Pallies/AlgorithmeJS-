"use strict";
// O(n)
function anagram(...str) {
    let a = {};
    let b = {};
    if (str[0].length !== str[1].length)
        return false;
    for (let val of str[0])
        a[val] = ++a[val] || 1;
    for (let val of str[1])
        b[val] = ++b[val] || 1;
    for (let key in a) {
        if (!b.hasOwnProperty(key))
            return false;
        if (b[key] !== a[key])
            return false;
    }
    return true;
}
var response = anagram("", "");
console.log("" + response);
response = anagram("aaz", "zza");
console.log("aaz " + response);
response = anagram("anagram", "nagaram");
console.log("anagram " + response);
response = anagram("rat", "car");
console.log("rat " + response);
response = anagram("awesome", "awesom");
console.log("awesome " + response);
response = anagram("qwerty", "qeywrt");
console.log("qwerty " + response);
response = anagram("texttwisttime", "timetwisttext");
console.log("texttwistting " + response);
