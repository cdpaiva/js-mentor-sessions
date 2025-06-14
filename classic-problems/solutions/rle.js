/**
 * Compress a string by representing consecutive runs as the frequency
 * and value of the character.
 *
 * @param {string} input - a sequence of chars to be encoded
 * @returns {string} - the encoded sequence
 *
 * @example
 * runLengthEncode("aaaaaabbbccccc");
 * // Returns: "6a3b5c"
 */
function runLengthEncode(input) {
    let encoded = "";
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            encoded += count + input[i - 1];
            count = 1;
        }
    }

    return encoded;
}
