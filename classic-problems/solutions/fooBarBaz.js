/**
 * Return a string according to the rules below:
 *
 * If the number is divisible by 3: 'Foo'
 * If the number is divisible by 5: 'Bar'
 * If the number is divisible by 7: 'Baz'
 *
 * If the number is divisible by more than one factor, combine them.
 * Return the number itself if it's not divisible by any factors.
 *
 * @param {number} n - A positive number.
 * @returns {string} - The [Foo][Bar][Baz] str or the number as a string.
 *
 * @example
 * fooBarBaz(75);
 * // Returns: 'FooBar'
 *
 * @example
 * fooBarBaz(8);
 * // Returns: '8'
 */
function fooBarBaz(n) {
    let ans = "";
    if (n % 3 == 0) {
        ans += "Foo";
    }
    if (n % 5 == 0) {
        ans += "Bar";
    }
    if (n % 7 == 0) {
        ans += "Baz";
    }

    if (!ans) {
        ans = String(n);
    }

    return ans;
}

/**
 * Apply `fooBarBaz` to an array of numbers.
 *
 * @param {number[]} arr
 */
function processCollection(arr) {
    for (var n of arr) {
        console.log(fooBarBaz(n));
    }
}
