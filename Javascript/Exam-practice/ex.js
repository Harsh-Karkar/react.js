{
  let chars = ["A", "B", "A", "C", "B"];
  let uniqueChars = [...new Set(chars)];
  console.log(uniqueChars); // a b c
}

{
  let fruit = ["apple", "banana", "orange", "mango", "cherry", "greenapple"];
  let fruit_len = fruit.map((ele) => ele.length);
  console.log(fruit_len); // 5 6 6 5 6 10
}

{
  let a = [11, 22, 33, 44];
  let b = [...a];
  b.push(66);
  console.log(a.length === b.length);
  console.log(b);
  console.log(a); // false
}

{
  function show(...arg) {
    let sum = 0;
    for (let i in arg) sum += arg[i];
    console.log("total is : ", sum);
  }
  show(40, 11, 5); // 56
}
{
  const obj1 = { name: "hello", age: 16 };
  const obj2 = { name: "hello", age: 16 };

  console.log(obj1 === obj2); //false
}

{
  var a = "hello";
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a.charCodeAt(i) - "a".charCodeAt(0);
  }
  console.log(sum); // 47
}

{
  function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return "It is not a palindrome";
      }
    }
    return "It is a palindrome";
  }
  const string = prompt("Enter a string: ");
  const value = checkPalindrome(string);
  console.log(value);
}

{
  // write a javascript program to find the maximum number in an array.

  function largest(arr) {
    let i;
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }
  let arr = [222, 555, 1, 39, 356];
  console.log("Largest in given array is " + largest(arr));
}
