/**
 * Finds all pairs of numbers in an array that add up to the given target value.
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]} - An array of pairs that add up to the target value.
 *
 * @example
 * findPairs([5, 5, 8, 1, 3, 2], 10);
 * // Returns: [[5, 5], [8, 2]]
 */
function findPairs(arr, target) {
    const pairs = [];
    const seen = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        if (seen[complement]) {
            pairs.push([complement, num]);
        }
        seen[num] = true;
    }

    return pairs;
}
