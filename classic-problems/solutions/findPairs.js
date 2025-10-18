/**
 * Finds all pairs of numbers in an array that add up to the given target value.
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]} - An array of pairs that add up to the target value.
 *
 * @example
 * findPairs([5, 5, 8, 1, 3, 2], 10);
 *
 * Returns: [[5, 5], [8, 2]]
 *
 * findPairs([2, 2, 2, 2], 4);
 *
 * Returns:
 *
 * [[2, 2], [2, 2]]
 */
function findPairs(arr, target) {
    const pairs = [];
    const seen = {};

    for (const num of arr) {
        const complement = target - num;

        if (seen[complement] > 0) {
            pairs.push([complement, num]);
            seen[complement]--;
        } else {
            seen[num] = (seen[num] || 0) + 1;
        }
    }

    return pairs;
}
