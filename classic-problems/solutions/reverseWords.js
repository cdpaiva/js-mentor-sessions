/**
 * Converts all words to lowercase and returns them in reverse order.
 *
 * @param {String} sentence
 *
 * @example
 * reverseWords("The quick brown fox jumps over the lazy dog")
 * // returns "dog lazy the over jumps fox brown quick the"
 */

function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map((s) => s.toLowerCase())
        .reverse()
        .join(" ");
}
