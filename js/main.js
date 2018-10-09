var testOne = "What kind of variable am I?";
// string
var testTwo = 256;
// number
var testThree = false;
// boolean
var testFour = 'true';
// string
var testFive = '128';
// string
var testSix = "";
// string


var testOne = "helo" + " there";
// string	"helo there"
var testTwo = '100' + 28;
// string	"10028"
var testThree = true + 3;
// number	4
var testFour = 'false' + 5;
//string	"false5"
var testFive = '128' - 3;
// number	125
var testSix = "" * 9;
// number	0
var testSeven = 'zero' - 1;
// nan
var testEight = 'five'.length;
// number	4
var testNine = 'five'[0] + 'ever';
// string	"4ever"
var testTen = 'a' > 'b';
// boolean	false
var testEleven = 'number'.length < 7;
// boolean	true
var testTwelve = '12' == 12;
// boolean	true
var testThirteen = 'twelve' == 12;
// boolean true
var testFourteen = '14' === 14;
// boolean false
var testFiften = 'hi there'[0] + 'open sesame'[2] + 'alohamora'[1] +
'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];
// string	"hello!"


var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
// string 	Hello, my name is Kingsley Pappagiorgio.


var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);
// number 	120


var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedConcatenation;

console.log(mixedConcatenation);
// number 	101undefined


var num4 = 5;

var num5 = 0;

if(num4 > 1) {

	console.log("Num4 is greater that 1");

} else{

	console.log("Num4 is NOT greater that 1")

};
// string 	Num4 is greater that 1


var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {

	console.log("if statement ran!");

} else if (num5 === "0" || true) {

	console.log("Else if staement ran");

} else {

	console.log ("Else staement ran");
};
// Else if staement ran


var num4 = 5;

var num5 = 0;

if(num4 > num5 && num4 === num5) {

	console.log("If staement ran!");

} else if (num5 === "0" || true) {

	console.log("Else if staement ran");

} else {

	console.log("Else staement ran");
};
// Else if staement ran


var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {
	console.log(i, string1[i]);

};
// string with one letter or space per line


var string2 = "coding";

var total = 0;

for (var i = 0; i < string2.length; i++) {
	total = total + i;
};

console.log(total);


var string3 = "onomatopoeia";

for (var i = 0; i < string3.length; i++) {
	if(string3[i] == "o") {

		console.log(i, string3[i]);
	};
};


var string4 = "You're gonna need a bigger boat.";

for (var i = 0; i < string4.length; i++) {
	if(string4[i] == "a" || string4[i] == "e" ||
		string4[i] == "i" || string4[i] == "o" ||
		string4[i] == "u") {

		console.log(string4[i]);
	};
};


function testStuff(a, b) {

	if(a > 25 && b < 100) {

		console.log(a + " is greater than 25 and " + b + " is less than 100");

	} else {

		console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");

	};
};

testStuff(10,101);

testStuff(26, 99);

testStuff(100,25);


function testStuff2(c, d) {

	if(c == 25) {

		return c + " is equal to 25";

	} else if (d <= 100) {

		return d + " is less than or equal to 100";

	} else {

		return "Neither if nor else if statement ran";

	};
	
};

testStuff2(26, 101);


function countVowels(someString) {

	var vowels = 0;

	for (var i = 0; i < someString.length; i++) {
		
		if(someString[i] == "a" || someString[i] == "e" || someString[i] =="i" ||
			someString[i] == "o" || someString[i] == "u"); {

			vowels++:
		};
	};

	return vowels;
};

countVowels("I am the very model of a modern major general");

countVowels("Exeunt pursued by a bear");

countVowels("o1234567891o");
