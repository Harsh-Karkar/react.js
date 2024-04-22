// ---------JAVASCRIPT STRING METHODS:---------

// ->A JavaScript string is zero or more characters written inside quotes.
// ->You can use single or double quotes.

// let a = "hello harsh"; // double quote
// let b = 'hello harsh'; // single quote
// console.log(a);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

// --------STRING METHOD:--------

/*Types of String methods are given below:
● String length
● String slice()
● String substring()
● String substr()
● String replace()
● String replaceAll()
● String toUpperCase()
● String toLowerCase()
● String concat()
● String trim()
● String trimStart()
● String trimEnd()
● String padStart()
● String padEnd()
● String charAt()
● String charCodeAt()
● String split()*/

// (1)String Length:-
// The length property returns the length of a string.
 
// let text ="hello harsh";
// let length = text.length;
// console.log(length);

// let string1 = "JAY SHREE RAM";
// console.log(string1.length);

// let harsh ='karkar harsh ';
// console.log(harsh.length);

// (2)String Slice:-
/*slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: start position, and end position (end not
included).
NOTES:- JavaScript counts positions from zero.......*/

let te = "jay shree ram";
let slice1 = te.slice(4);
let slice2 = te.slice(-9 ,-4 )
let slice3 = te.slice(4,-1);
let slice4 = te.slice(6 , 8)
console.log(slice3);

// (3)String Substring:-
/* substr() is similar to slice().
 The difference is that the second parameter specifies the length of the extracted part.*/

let sub = "shivaji ,pratap,shiv";
let length = sub.substring(9,15);
let length2 = sub.substring(7);
let length3 = sub.substr(8,7);
console.log(length2);

// (4)String Replace:-
/*The replace() method replaces a specified value with another value in a string

NOTES:-     The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set.
The replace() method is case sensitive.*/

 let text1 = "hello harsh";
 let text2 = text1.replace("hello","karkar");
 let text3 = text1.replace('harsh','karkar');
 console.log(text3);

 // (5)String ReplaceAll:-
 /*The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
 */
 let text = "I love cats. Cats are very easy to love. Cats are very popular.";
 text = text.replaceAll("Cats","Dogs");
 text = text.replaceAll("cats","dogs");
 console.log(text);

let rep ='i love india.';
rep = rep.replaceAll("india","bharat");
console.log(rep);

let rep1 = 'i am sweet.';
rep1 = rep1.replaceAll("sweet","shy");
console.log(rep1);

// (6)String toUpperCase():-
// The toUpperCase() method converts string lower case to upper case.
 
let up ='karkar harsh';
let upp ='har har mahadev';
let up1=upp.toUpperCase();
console.log(up1);

// (7)String toLowerCase():-
// The toUpperCase() method converts string upper case to lower case.

let low ='HARE KRISHNA';
let lo = 'BHAGAVAT GITA'
let low1 =lo.toLowerCase();
console.log(low1);

// (8)String concat():-
// The concat() joins two strings.
 
let concat1 = 'karkar';
let concat2 = 'harsh';
let concat3 = concat1.concat('_',concat2);
console.log(concat3);

// (9)String trim():-
// The trim() method removes whitespace from both sides of a string

let trim1 = ' karkar  harsh';
let trim2 = trim1.trim();
console.log(trim2.length);
console.log(trim2);


// (10)String trimStart():-
// The trimStart() method removes like trim(), but removes whitespace only from the start of a string.

let trimStart1 = '    karkar harsh' ;
let trimStart2 = trimStart1.trimStart();
console.log(trimStart2.length);
console.log(trimStart2);

// (11)String trimEnd():-
// The trimEnd() method removes like trim(), but removes whitespace only from the end of a string.
let trimEnd1 = '     karkar harsh     ';
let trimEnd2 = trimEnd1.trimEnd();
console.log(trimEnd1.length);
console.log(trimEnd2);

// (12)String padStart():-
// The padStart() method pads a string with another string.

let padStart1 = '50';
let padStart2 = padStart1.padStart(6,'1');
console.log(padStart2);

let num = 2;
let tex = num.toString();
let padStart = tex.padStart(6,5);
console.log(padStart);

// (13)String padEnd():-
// The padEnd() method pads a string with another string.

let padEnd1 = '05';
let padEnd2 = padEnd1.padEnd(3,'0');
console.log(padEnd2);

let num1 = 2;
let tex1 = num1.toString();
let padEnd = tex1.padEnd(5,5);
console.log(padEnd);

// (14)String charAt():-
// The charAt() method returns the character at a specified index (position) in a string.

let charAt1 = 'karkar';
let charAt2 = charAt1.charAt(6);
console.log(charAt2);

// (15)String charCodeAt():-
// The charCodeAt() method returns the unicode of the character at a specified index in a string.
// The method returns a UTF-16 code (an integer between 0 and 65535).

let charCodeAt1 = 'harsh';
let charCodeAt2 = charCodeAt1.charCodeAt(0);
console.log(charCodeAt2);

// (16)String split():-
// A string can be converted to an array with the split() method.

let split1 = 'karkar harsh';
let split2 = split1.split('-');
console.log(split2);

let split = 'JAY SHREE RAM';
let split3 = split.split('');
console.log(split3);


// (17) String startsWith():-
let St = "heyy i am harsh karkar"
console.log(St);
let String5 = St.startsWith("s");
console.log(String5);


// (18) String endWith():-
let String58 = "Why Need Form Valiadation In Web Development  "
console.log(String58);
let String59 = String58.endsWith(" ");
console.log(String59);