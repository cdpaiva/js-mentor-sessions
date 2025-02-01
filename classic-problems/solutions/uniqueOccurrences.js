/**
 * Indicates if all elements in the array have unique counts.
 *
 * @param {number[]} arr
 * @returns {boolean}
 *
 * @example
 * uniqueOccurrences([1, 3, 3, 5, 5, 5])
 * // true
 *
 * uniqueOccurrences([1, 2, 2, 3, 3, 55, 55])
 * // false
 */
function uniqueOccurrences(arr) {
    const counts = {};
    arr.forEach((val) => (counts[val] = (counts[val] || 0) + 1));

    const val = Object.values(counts).sort((a, b) => a - b);

    for (let i = 0; i < val.length - 1; i++) {
        if (val[i] === val[i + 1]) {
            return false;
        }
    }
    return true;
}
