/**
 * @Définition
 * Le tri par sélection (ou tri par extraction) est un algorithme de tri par comparaison. Cet
 * algorithme est simple, mais considéré comme inefficace car il s'exécute en temps quadratique
 * en le nombre d'éléments à trier, et non en temps pseudo linéaire.
 * 
 * BigO = O²
 * source => https://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection
 */

import { swap } from "../function/function-common";
import { randomArray } from "../function/Array/create-array";

export function selectionSort(arr: number[]): number[] {
  let len = arr.length;
  let idx: number;
  let value: number;
  for (let i = 0; i < len; i++) {
    idx = i;
    value = arr[i];
    for (let j = i+1; j < len; j++) {
      if (value > arr[j]) {
        value = arr[j];
        idx = j;
      }
    }
    if(idx !== i) swap(arr,i,idx)
  }
  return arr;
}

// test => tsnd --respawn .\selection-sort.ts
const arr: number[] = randomArray(100);
console.log(arr);
console.log(selectionSort(arr));

// [ 5, 7, 4, 9, 6 ]
//   i  j
//  val  
//  idx
// [ 5, 7, 4, 9, 6 ]
//        val
//   i    idx  
// j boucle sur le tableau à la recherche de la plus petite valeur
// si plus petit l'index et sa valeur est sauvegardée
// et on continue sur la suite du tableau (index => j)
// fin de boucle on échange avec la valeur de début (index => i)
// [ 5, 7, 4, 9, 6 ]
//  => swap
//      i  j
// [ 4, 7, 5, 9, 6 ]