/*------ 1. Write a function that returns the square of a number 1 to 20 ------*/

// {
//   function squareNumber(num) {
//     return num * num;
//   }
//   for (let i = 1; i <= 20; i++) {
//     let ans = squareNumber(i);
//     console.log(ans);
//   }
// }

/*------ 2. Write a function to convert Celsius to Fahrenheit ------*/

// {
//     function Celsius(c){
//         return (c*9/5)+32;
//     }

//     let ans = Celsius(25);
//     console.log(ans);
// }

/*------ 3. Write a function to find the area of a given Rectangle ------*/
// {
//     function rect(l , b){
//         return  l * b;
//     }
//     console.log(rect(5,7));
// }

/*------ 4. Write a function to reverse a number ------*/
// {
//     function reverseNumber(num) {
//         let reversedNum = parseInt(num.toString().split('').reverse().join(''));
//         return reversedNum;
//     }
//     console.log(reverseNumber("9173844406"));
// }

// {
//    function  rev(){
//     for(let a =10; a>=1 ; a--)
//     {
//         console.log(a);
//     }
//    }
//    rev()
// }

/*------5. Count the number of Vowels in the String ------*/

// {
//     {
//         function num(string){
//             let Vowels = 'aAeEiIoOuU';
//             let count = 0;

//             for(let i = 0; i < string.length; i++){
//                 if (Vowels.indexOf(string[i]) !== -1){
//                     count += 1;
//                 }
//             }
//             return count;
//         }
//         console.log("The Total Number Of Vowels is", num("Hello Betaa!"));
//     }
// }

/*------6. Write a function to calculate simple interest based on the principal amount------*/

// {
//     function  calcInterest(principal, rate, time) {
//         var interest = (principal*rate*time)/100;
//         return interest + " is the Simple Interest";
//       }

//       console.log(calcInterest(2000, 5, 3))
// }

/*------ 7. Write a function to generate a random number ------*/
// {
//     function getRandomNumber(min, max){
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//       }
//       console.log(getRandomNumber(1, 10));
// }

/*------ 8. Write a JavaScript program to display the current day and time in the following format. ------*/
// {
//     {
//         function date(){
//             let now = new Date();
//             const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//             let day = weekday[now.getDay()];
//             let hours = now.getHours();
//             let minutes = now.getMinutes();

//             console.log("Today is", day , "and the time is", hours,":",minutes);
//         }
//         date();
//     }
// }

// <-- 9 -->
// {

//     function order(string){

//         return string.split('').sort().join('');

//     }
//     console.log("harsh =", order("harsh"));
// }

/*-----10 -----*/
// get the three numbers from the user
{
  
}
