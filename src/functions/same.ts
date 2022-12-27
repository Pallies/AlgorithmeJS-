// first solution
function same(values: number[], carre: number[]): boolean {
  let result = true;
  //   itération
  for (const v of values) {
    // comparaison le carré du nombre est trouvé autant de fois que le nombre existe dans le tableau
    carre.filter((b) => b == v * v).length ==
    values.filter((a) => a == v).length
      ? ""
      : (result = false);
    // si la condition n'est pas respectée alors le résultat est faux
    if (!result) break;
  }
  return result;
}
var time1 = performance.now();
var response = same([1, 2, 3], [4, 1, 9]);
console.log("réponse 1 : " + response);
response = same([1, 2, 3], [1, 9]);
console.log("réponse 2 : " + response);
response = same([1, 2, 3], [4, 4, 1]);
console.log("réponse 3 : " + response);
response = same([1, 3, 3, 3], [1, 9, 9, 1]);
console.log("réponse 4 : " + response);
var time2 = performance.now();
// best solution
function sameBest(values: number[], carre: number[]): boolean {
  if (values.length !== carre.length) return false;
  //   itération
  for (let i = 0; i < values.length; i++) {
    // la valeur est dans le tableau ? -1 si non
    let index = carre.indexOf(values[i] ** 2);
    // valeur non trouvé ?
    if (index === -1) return false;
    // retire la valeur du tableau
    carre.splice(index, 1);
  }
  return true;
}
var time3 = performance.now();
response = sameBest([1, 2, 3], [4, 1, 9]);
console.log("réponse best 1 : " + response);
response = sameBest([1, 2, 3], [1, 9]);
console.log("réponse best 2 : " + response);
response = sameBest([1, 2, 3], [4, 4, 1]);
console.log("réponse best 3 : " + response);
response = sameBest([1, 3, 1, 1, 3, 1], [1, 9, 9, 1, 1, 1]);
console.log("réponse best 4 : " + response);
var time4 = performance.now();
console.log(`
Time 1: ${(time2 - time1) / 1000} seconds.
or Best 
Time 2: ${(time4 - time3) / 1000} seconds.
`);
function sameBestter(values: number[], carre: number[]): boolean {
  if (values.length !== carre.length) return false;
  //   itération
  let index: any = {};
  let tableau: any = {};
  for (let key of values) index[key] = index[key]++ || 0;
  for (let key of carre) tableau[key] = tableau[key]++ || 0;
  for (let key in index) {
      if (index[key] !== tableau[parseInt(key) ** 2]) return false;
      if(!tableau.hasOwnProperty(parseInt(key)**2))return false;
        // idem
      // if (!(parseInt(key) ** 2 in tableau)) return false;
  }
  return true;
}

var time5 = performance.now();
response = sameBest([1, 2, 3], [4, 1, 9]);
console.log("réponse best 1 : " + response);
response = sameBest([1, 2, 3], [1, 9]);
console.log("réponse best 2 : " + response);
response = sameBest([1, 2, 3], [4, 4, 1]);
console.log("réponse best 3 : " + response);
response = sameBest([1, 3, 1, 1, 3, 1], [1, 9, 9, 1, 1, 1]);
console.log("réponse best 4 : " + response);
var time6 = performance.now();
console.log(`
Time 1: ${(time2 - time1) / 1000} seconds.
or Best 
Time 2: ${(time4 - time3) / 1000} seconds.
or Best 
Time 3: ${(time6 - time5) / 1000} seconds.
`);
