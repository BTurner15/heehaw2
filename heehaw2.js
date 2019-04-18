// Bruce Turner, IT 328, Spring 2019
// Professor Ostrander, Green River Community College
// April 17 2019
// file heehaw2.js
// "...If the user passes in an invalid parameter, print an error message.
// Write multiple statements to test your function.
// Make sure that your test output is clear.""
//------------------------------------------------------------------------------
//								isEven()
//credit to StackOverflow response# 5
//https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
//Note: +0 === -0 evaluates to true.
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
//------------------------------------------------------------------------------
//								Number()
var $foo = Number ( prompt (" Please input a positive number greater than zero " , "")) ;
var $theNumber = parseInt($foo);
if(isNaN($theNumber)){
    console.log(" Sorry, input does not evaulate to a number");
    throw new Error("Sorry, your input does not evaluate to a number");
}
else if(($theNumber === -0) || ($theNumber <= 0)){
    console.log(" Sorry, we cannot count from 1 to a negative number with this heeHaw()");
    throw new Error("Sorry, we cannot count from 1 to a negative number with this heehaw()");
}
else if(!Number.isFinite($theNumber)){
    console.log(" Sorry, we cannot count from 1 to infinity with this heeHaw()");
    throw new Error(" Sorry, we cannot count from 1 to infinity with this heeHaw()");
}
//console.log(isEven(50));
// → true
//console.log(isEven(75));
// → false
//console.log(isEven(-1));
// → false
var text = "";
var i = 0;
var done = false;
while (!done) {
    i++;
    if(i === $theNumber) {
        done = true;
    }
    // number evenly divisible by 3 and NOT 5, print “Hee!” instead of the number.
    // number evenly divisible by 5 and NOT 3, print “Haw!” instead of the number.
    // number evenly divisible by both 3 and 5, print “Hee Haw!” instead of the number.
    var remBy3 = i % 3;
    var evenlyBy3 = (remBy3 === 0);
    var remBy5 = i % 5;
    var evenlyBy5 = (remBy5 === 0);

    if(evenlyBy3 && !evenlyBy5)console.log("Hee!");
    else if(!evenlyBy3 && evenlyBy5)console.log("Haw!");
    else if(evenlyBy3 && evenlyBy5)console.log("Hee Haw!");
    else console.log(i);
    text += "<br> " + i;
}
//document.getElementById("number").innerHTML = text;