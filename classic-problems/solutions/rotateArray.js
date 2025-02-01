/**
 * Shift all the elements in an array to the right, by `k` positions.
 * Returns a new array.
 *
 * @param {number[]} arr
 * @param {number} k - Number of positions to shift
 *
 * @example
 * rotateArray([1, 2, 3, 4, 5], 3)
 * // returns [3, 4, 5, 1, 2]
 */
function rotateArray(arr, k) {
    const n = arr.length;

    k = k % n;

    return arr.slice(-k).concat(arr.slice(0, n - k));
}
