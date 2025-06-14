/**
 * Merge two sorted arrays.
 *
 * @param {number[]} arr1 - A sorted array of numbers.
 * @param {number[]} arr2 - A sorted array of numbers.
 * @returns {number[]} - A new sorted array of numbers.
 *
 * @example
 * mergeArrays([1, 3, 5], [2, 4, 6]);
 * // Returns: [1, 2, 3, 4, 5, 6]
 *
 * @example
 * mergeArrays([8], [2, 4, 6, 10, 12]);
 * // Returns: [2, 4, 6, 8, 10, 12]
 */
function mergeArrays(arr1, arr2) {
    const merged = [];

    var i = 0;
    var j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    for (; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}
