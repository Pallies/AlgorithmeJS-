/**
 * @Définition
 * Le tri à bulles ou tri par propagation est un algorithme de tri. Il consiste à comparer
 * répétitivement les éléments consécutifs d'un tableau, et à les permuter lorsqu'ils sont mal
 * triés. Il doit son nom au fait qu'il déplace rapidement les plus grands éléments en fin de
 * tableau, comme des bulles d'air qui remonteraient rapidement à la surface d'un liquide.
 * Le tri à bulles est souvent enseigné en tant qu'exemple algorithmique, car son principe est
 * simple. Mais c'est le plus lent des algorithmes de tri communément enseignés, et il n'est donc
 * guère utilisé en pratique.
 *
 * BigO = O²
 * source => https://fr.wikipedia.org/wiki/Tri_%C3%A0_bulles
 */
import { swap } from "../function/function-common";
import { randomArray } from "../function/Array/create-array";

export function bubbleSort(arr: number[]): number[] {
  let len = arr.length;
  let sorted = true;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return arr;
}

// test => tsnd --respawn .\bubble-sort.ts
const arr: number[] = randomArray(100);
console.log(arr);
console.log(bubbleSort(arr));

// [ 3, 7, 4, 9, 5 ]
//   j  j  
// [ 3, 7, 4, 9, 5 ]
//     j > j+1
// [ 3, 7, 4, 9, 5 ] 
//  => swap
//         j > j
// [ 3, 4, 7, 9, 5 ]
