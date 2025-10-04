/**
 * Write code to generate pyramid patterns with '*'.
 *
 */

// *
// **
// ***
// ****
// *****
// ******

// each line has one extra *
// we can loop and concatenate an extra * in each step

var rows = 6;

var line = "";
for (var i = 0; i < rows; i++) {
    line += "*";
    console.log(line);
}

console.log("");

// ******
// *****
// ****
// ***
// **
// *

// the number of * decreases from n to 1
// build each line with an inner loop
// the outer loop controls how many * to add

for (var i = rows; i >= 1; i--) {
    var line = "";
    for (var j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

console.log("");

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// the diamond combines two patterns
// the upper pyramid has decreasing whitespaces
// and increasing *

var rows = 5;

for (var i = 1; i <= rows; i++) {
    var line = "";

    // same number of whitespaces as number of rows
    for (var s = 0; s < rows - i; s++) {
        line += " ";
    }

    // incrementing odd number of *
    for (var j = 0; j < 2 * i - 1; j++) {
        line += "*";
    }
    console.log(line);
}

// the inverse pyramid uses the same logic
// we just have to invert the row order
// also skip the longer row to create the pattern

for (var i = rows - 1; i >= 1; i--) {
    var line = "";

    for (var s = 0; s < rows - i; s++) {
        line += " ";
    }

    for (var j = 0; j < 2 * i - 1; j++) {
        line += "*";
    }
    console.log(line);
}

console.log("");

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

// same as the diamond, just invert the pyramids

var rows = 5;

for (var i = rows; i >= 1; i--) {
    var line = "";

    for (var s = 0; s < rows - i; s++) {
        line += " ";
    }

    for (var j = 0; j < 2 * i - 1; j++) {
        line += "*";
    }
    console.log(line);
}

for (var i = 2; i <= rows; i++) {
    var line = "";

    for (var s = 0; s < rows - i; s++) {
        line += " ";
    }

    for (var j = 0; j < 2 * i - 1; j++) {
        line += "*";
    }
    console.log(line);
}
