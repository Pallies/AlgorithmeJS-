/**
 * Big O
 * calcul
 * total = 0 => 1 affectation
 * i = 1 => 1 affectation
 * i <= n => n comparaison
 * i++ => n operation + n affectation
 * total += 1 => n opération + n affectation
 * 
 * Big O = 5n + 2
 */
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
