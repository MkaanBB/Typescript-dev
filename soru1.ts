function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {

const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];

console.log(mergeArrays(numArr, strArr));
