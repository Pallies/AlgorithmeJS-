/**
 * @function
 * construction d'un tableau
 * 1 dimension []
 * de longueur = len (length)
 * @param  {number} len
 */
const randomArray = (len: number) => {
  return Array.from({ length: len }, () => Math.floor(Math.random() * 100));
};
/**
 * @function
 * construction d'un tableau
 * 1 dimension []
 * de longueur = len (length)
 * avec un remplissage de la cellule (cell) par défaut à 0
 * @param  {number} len
 * @param  {string|number=0} cell
 */
const initArray = (len: number, cell: string | number = 0) => {
  return Array.from({ length: len }).fill(cell);
};
/**
 * @function
 * construction d'un tableau
 * 2 dimension [][]
 * de longueur = len (length)
 * @param  {number} len
 */
const randomDoubleArray = (len: number) => {
  return Array.from({ length: len }, () => [Math.floor(Math.random() * 100)]);
};
/**
 * @function
 * construction d'un tableau
 * 2 dimension [][]
 * de longueur = len (length)
 * avec un remplissage de la cellule (cell) par défaut à 0
 * @param  {number} len
 * @param  {string|number=0} cell
 */
const initDoubleArray = (len: number, cell: string | number = 0) => {
  return Array.from({ length: len }, () => [].fill(cell));
};

/**
 * @function
 * prend un tableau en paramètre
 * et le redonne dans un ordre àléatoire
 * @param  {Array<number>} array
 */
const disorderArray = (array: Array<number>) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
