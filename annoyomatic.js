// var answer = prompt("Are We There Yet?");

// while(answer !== "yes" && !== "yeah") {
//     var answer = prompt("Are We There Yet?")
// }

// alert("YAY, WE MADE IT!");

// VERSION 2

var answer = prompt("Are We There Yet?");

while (answer.indexOf("yes" === -1)) {
    var answer = prompt("Are We There Yet?")
}

alert("YAY, WE MADE IT!");
