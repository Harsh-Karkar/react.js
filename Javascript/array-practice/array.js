/* 1 array push() method */
{
  let arry = ["apple", "banana"];

  console.log(arry); // output : ["apple", "banana"]
  arry.push("orange");

  console.log(arry); // Output: ['apple', 'banana', 'orange']
}

{
  let arry = ["1", "2", "3"];

  console.log(arry);

  arry.push("4", "5");

  console.log(arry);
}

{
  let arry = ["harsh", "darshan", "pratik"];

  console.log(arry);

  arry.push("darshil", "rushabh");
  console.log(arry);
}

/*  2 array pop() method */
{
  let array = ["banana", "orange", "pineapple"];

  console.log(array); // output : ["banana" , "orange" , "pineapple"]
  array.pop();

  console.log(array); // output : ['banana', 'orange']
}

{
  let array = [1, 2, 3, 4];

  console.log(array);
  array.pop();
  console.log(array);
}

{
  let array = ["harsh", "tushar", "om", "meet"];

  console.log(array);
  array.pop();

  console.log(array);
}

/*   3 array shift() method */

{
  let array = [5, 6, 7, 8, 9];

  console.log("Original Array: ", array);
  console.log("Shifted Element: ", array.shift());
  console.log("Array after Shift: ", array);
}

{
  let array = ["apple", "pinapple", "mango"];

  console.log(array);
  array.shift();
  console.log(array);
}

{
  let array = "I love coding".split(" ");
  console.log(array);

  array.shift();
  console.log(array);
}

/*   4 array unshift() method  */

{
  let fruits = ["banana", "apple"];
  console.log(fruits);

  fruits.unshift("cherry");
  console.log(fruits);
}

{
  let arr = [2, 4, 6, 8];
  console.log(arr);
  arr.unshift(1);
  console.log(arr); //[1, 2, 4, 6, 8]
}

{
  let hello = ["hii", "hyy", "hai", "hey"];
  console.log(hello);
  hello.unshift("Hello");
  console.log(hello);
}

/*   5 array slice() method*/
{
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arry = numbers.slice(3);

  console.log(arry);
}

{
  let name = ["harsh", "kumar"];
  console.log(name.slice(1));
}

{
  let car = ["audi", "bmw", "toyota"];
  console.log(car.slice(-1));
}

/*  6 array splice() method */

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
/* splice(start, deleteCount, item1, item2) */
{
  let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
  fruits.splice(2, 0, "durian");
  console.log(fruits);
}

{
  let bike = ["splender", "bullet", "shine", "duke", "ktm"];
  bike.splice(2, 1, "firebird");
  console.log(bike);
}

{
  let arr = ["a", "b", "c", "d", "e"];
  arr.splice(2, 3);
  console.log(arr);
}

// splicing an empty array
{
  let x = [];
  x.splice(0, 0, "Hello");
  console.log(x);
}

/* 7 sort( ) method*/

{
  let nums = [5, 8, 9, 4, 1];
  nums.sort((a, b) => a - b); // ascending order
  console.log("Asc: ", nums);

  nums.sort((a, b) => b - a); // descending order
  console.log("Desc:\n", nums);
}

{
  let words = ["yellow", "blue", "green", "red", "black"];

  words.sort();
  console.log("Sorted alphabetically\n", words);

  words.sort((a, b) => a.length - b.length);
  console.log("\nSorted by length of the word\n", words);
}

{
  let numbers = [16, 28, 12, 45, 10];

  numbers.sort((a, b) => a - b);

  console.log(numbers);
}

/* 8 forEach() */
{
  const fruits = ["apple", "banana", "grapes"];

  fruits.forEach((item) => {
    console.log(`I like ${item}`);
  });
}

/*  9 map() method */
{
  const arr = [1, 3, 7, 9];
  const squareArr = arr.map((num) => num * num);
  console.log("Square array : ", squareArr);
}
{
  const students = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Oliver", age: 45 },
  ];

  const printName = (student) => `${student.name}`;
  console.log("Printing names");
  console.log(students.map(printName));

  const getAgeAndDouble = (student) => student.age * 2;
  console.log("Doubling Ages");
  console.log(students.map(getAgeAndDouble));
}
{
  const numbers = [1, 4, 9];
  const roots = numbers.map((num) => Math.sqrt(num));

  console.log(roots);
}

/*  10 filter() method */
{
  let name = ["harsh", "hari", "Harry"];

  let array = name.filter((val) => val.length <= 4);

  console.log(array);
}

{
  let number = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  let num = number.filter((val) => val % 2 == 0);

  console.log(num);
}

{
  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const result = words.filter((word) => word.length > 8);

  console.log(result);
}

/* 11 flat() method */
{
        const arr = [1 , 2 , 3 , 4 ,[1 , 2 ,[1, 2]], [3, 4]];
        console.log(arr.flat(2)); 
}

{
    const arr = [[1, 2], [3, 4], [5,  6]];
    console.log(arr.flat());
}

{
    // default value of depth is 1
    const arr = [[1, 2], [3, [4, 5]]];
    console.log(arr.flat());
}

