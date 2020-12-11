/**
 * @function
 * échange les valeurs d'un tableau
 * par défaut avec l'index suivant
 * sinon avec la valeur idx2
 * @param  {number[]} arr 
 * @param  {number} idx
 * @param  {number=idx+1} idx2
 * @returns number
 */
const swap = (arr: number[], idx: number, idx2: number = idx + 1): number[] => {
  return ([arr[idx], arr[idx2]] = [arr[idx2], arr[idx]]);
};
/**
 * @function
 * renvoie le chiffre unitaire de l'exposant
 * ex num = 34568 exp 3
 *  return 4
 * @param  {number} num
 * @param  {number} exp
 * @returns number
 */
const radixNumber = (num:number,exp:number):number => {
  return Math.floor((Math.abs(num) / Math.pow(10, exp)) % 10);
}
export{
    swap,
    radixNumber,
}