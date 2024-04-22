/* 1. Display Alert in JavaScript */
{
  // alert("this is alert");
}

/* 2. Display Confirmation box using JavaScript */
{
  // var result = confirm("Do you want to continue?");
  //     if (result == true) {
  //         alert("You clicked OK!");
  //     } else {
  //         alert("You clicked Cancel!")
  //     }
}

/* 3. Display Prompt box using JavaScript */
{
  // function showPrompt() {
  //     var userInput = prompt("Please enter your name:", "harsh karkar");
  //     if (userInput != null) {
  //       alert("Hello, " + userInput + "! Welcome to our website!");
  //     }
  //   }
  //   showPrompt();
}
/* 13. Retrieve Today’s Date in JavaScript */
{
  //   function date() {
  //     let now = new Date();
  //     console.log("Today is", now);
  //   }
  //   date();
}

/* 14. Reverse array javascript */

{
//   let array = [1, 2, 3, 4, 5];
//   console.log("Original array:", array);

//   array.reverse();
//   console.log("Reversed array:", array);
}

// // 15. JavaScript concate or merge two Arrays

// {
//   let arry11 = ["Anni", "Yash", "Kartik", "Gopal", "Vijay", "Jontes"]
//   let arry22 = ["Aesha", "Ekta", "Nidhi", "Mansi", "Monika"]
//   let arry44 = arry11.concat(arry22)
//   console.log(arry44)
// }

// // 16. Reverse String in JavaScript

// {
//   function reverseString(str) {
//     return str.split('').reverse().join('')
//   }

//   console.log(reverseString("Aniruddh Godhani"))
// }

// // 18. if else statement in JavaScript

// {
//   var a = 22

//   if (a % 2 == 0) {
//     document.write("A Num Is Even")
//   }
//   else {
//     document.write("A Num Is Odd")
//   }
// }

// // 19. Insert element in array javascript

// {
//   const Name = ["hari", "rahul", "meet", "jay", "het"]

//   document.getElementById("demo").innerHTML = Name.push("harshita", "hetsvi")

//   console.log(Name)
// }

// // 21. getElementsByClassName() method in JavaScript

// {
//   document.getElementById('box-1').innerHTML = "Hallo Good Morning EveryOne..."
//   const model = document.getElementsByClassName('box')
//   console.log(model)
// }

// // 22. getElementByTagName() method in JavaScript

// {
//   const element = document.getElementsByTagName('h1')
//   function addText() {
//     for (let i = 0; i < element.length; i++) {
//       element[i].innerHTML = "harshuuuu ...."
//       element[i].style.color = "red"
//     }
//   }
//   addText()
// }

// // 45. Display Message every 3 second using Javascript

// {
//   function time() {
//     let datetime = new Date().toLocaleTimeString()
//     console.log(Current Time is ${datetime})
//   }

//   time()
//   setInterval(time, 3000)
// }

// // 44. Change the page colour in Every 5 sec in JavaScript

// {
//   function changeColor() {

//     var randomColor = '#' + Math.floor(Math.random() * 12345678).toString(16)

//     document.body.style.backgroundColor = randomColor
//   }

//   setInterval(changeColor, 1000)
// }

// {
//   function changeColor1() {
//     var randomColor = '#' + Math.floor(Math.random() * 22242628).toString(18)

//     document.body.style.backgroundColor = randomColor
//   }
//   setInterval(changeColor1, 5000)
// }

// // 43. Change background colour of div javascript

// {
  function changeColor3() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    document.getElementById('myDiv').style.backgroundColor = randomColor
  }
  setInterval(changeColor3, 1000)
// }

// // 38. Convert Celsius Value to Farenheit Value in JavaScript

// {
//   function Celsius(v) {
//     return (v * 9 / 5) + 32
//   }

//   let result4 = Celsius(22)
//   console.log(result4)
// }

// // 39. javascript get today’s date

// {
//   let Date9 = new Date()
//   console.log(Date9)
// }


// // 54. Break and Continue in JavaScript

// {
//   for (let counter = 0; counter <= 100; counter++) {
//     if (counter == 44) {
//       break
//     }
//     console.log(counter)

//   }
// }

// {
//   let u = 1

//   while (u <= 100) {
//     if (u % 5 === 0) {
//       u++
//       continue
//     }

//     document.write(u + " ")
//     u++
//   }
// }

// // 53. Reload page JavaScript

// {
//   function reloadPage() {
//     location.reload()
//   }
// }

// // 55. JavaScript Conditional Operator

// {
//   let aggriment = 0
//   let age = aggriment == 0 ? "Login" : "Logout"
//   console.log(age)
// }

// // 56. Example of this KeyWord in JavaScript

// {
//   const anni = {
//     name: 'Ekta',
//     age: 22,
//     city: 'Surat',
//     country: 'India',
//     ani() {

//       console.log('Hallo My Name Is', this.name, 'I Am', this.age, 'Years Old And I am Live In', this.city + ',', this.country)
//     }
//   }
//   anni.ani()
// }

// // 62. How to sort array value using sort() method in JavaScript

// {
//   var word = ["Nidhi", "Gopal", "Yash", "Vijay", "Shradha", "Anni", "Hari", "Trusha", "Chirag", "Pinal", "Kartik", "Ekta", "Jontis", "Dhruvil", "Hasti", "Aesha", "Monika", "Riya"]//   word.sort(function (a, v) {
//     var LetterA = a.charAt(0)
//     var LetterV = v.charAt(0)

//     if (LetterA < LetterV) {
//       return -1
//     }
//   })

//   console.log(word)
// }

// // 46. JavaScript get max value in array of objects

// {
//   const arrayOfObj = [
//     { value: 101 },
//     { value: 20 },
//     { value: 60 },
//     { value: 87 },
//     { value: 220 },
//     { value: 30 },
//     { value: 8 },
//     { value: 50 }
//   ];

//   const max = Math.max(...arrayOfObj.map(obj => obj.value))
//   console.log(max)
// }

// // 48. Find index of Largest value in An Array in JavaScript
// {
//   function findIndexOfLargest(arr) {
//     if (arr.length === 0) {
//       return -1
//     }

//     let maxValue = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxValue) {
//         maxValue = arr[i]
//       }
//     }

//     return arr.indexOf(maxValue)
//   }

//   const array = [10, 5, 20, 8, 15, 22]
//   const largestIndex = findIndexOfLargest(array)
//   console.log("Index of the largest value:", largestIndex)
// }

// // 51. JavaScript Check an object is an array or not

// {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const ani = ['Anni', 'Aesha', 'Yash', 'Vijay', 'Nidhi', 'Kartik', 'Ekta']
//   const anni = { name: 'Ekta', age: 22, city: 'Surat', country: 'India' }
//   console.log(Array.isArray(array))
//   console.log(Array.isArray(ani))
//   console.log(Array.isArray(anni))
// }

// // 47. Sort and Reverse an array of Objects using JavaScript

// {
//   const arrayOfObjects = [
//     { Name: 'Yash', age: 24 },
//     { Name: 'Ani', age: 22 },
//     { Name: 'Kartik', age: 25 },
//     { Name: 'Aesha', age: 23 },
//     { Name: 'Ekta', age: 22 },
//     { Name: 'Gopal', age: 26 },
//     { Name: 'Nidhi', age: 21 },
//     { Name: 'Monika', age: 20 },
//   ]

//   arrayOfObjects.sort((a, b) => a.age - b.age)

//   console.log("Sorted array:", arrayOfObjects)
// }

// {
//   const arrayOfObj = [
//     { Name: 'Yash', age: 24 },
//     { Name: 'Ani', age: 22 },
//     { Name: 'Kartik', age: 25 },
//     { Name: 'Aesha', age: 23 },
//     { Name: 'Ekta', age: 22 },
//     { Name: 'Gopal', age: 26 },
//     { Name: 'Nidhi', age: 21 },
//     { Name: 'Monika', age: 20 },
//   ]
//   arrayOfObj.reverse()

//   console.log("Reversed array:", arrayOfObj)
// }

