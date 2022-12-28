/** O(n) */
function frequenceCounter(...str: string[]): boolean {
  let a: any = {};
  let b: any = {};
  if (str[0].length !== str[1].length) return false;
  for (let val of str[0]) a[val] = ++a[val] || 1;
  for (let val of str[1]) b[val] = ++b[val] || 1;
  for (let key in a) {
    if (!b.hasOwnProperty(key)) return false;
    if (b[key] !== a[key]) return false;
  }
  return true;
}
/** O(n) */
function counterSum(arg: number[]): any {
  let start = 0,
    end = arg.length - 1;

  while (start < end) {
    let sum = arg[start] + arg[end];
    if (sum === 0) return [arg[start], arg[end]]; // O(1)
    if (sum < 0) start++;
    else end--;
  }
}
/** O(log n) */
function multiplePointer(arg: any) {
  let left = 0;
  for (let rigth = 1; rigth < arg.length; rigth++) {
    if (arg[left] != arg[rigth]) {
      left++;
      arg[left] = arg[rigth];
    }
  }
  return left == 0 ? 0 : left + 1;
}
