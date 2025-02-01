/**
 * Finds the first duplicated number in an array of positive numbers.
 * Returns -1 if no duplicates are found.
 *
 * @param {number[]} arr - The array of positive numbers.
 * @returns {number} The first duplicated number, or -1 if no duplicates exist.
 *
 * @example
 * firstDuplicate([5, 7, 8, 1, 7, 3, 5]);
 * // Returns: 7
 *
 * @example
 * firstDuplicate([1, 2, 3, 4, 5]);
 * // Returns: -1
 */
function findFirstDuplicate(arr) {
    const seen = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (seen[num]) {
            return num;
        }
        seen[num] = true;
    }

    return -1;
}
