// {
//     var bar= function foo() {};
//     console.log(bar === foo); // foo is not define
// }

// {
//     console.log(1 + 2 + '1'); // 31
//     console.log('1' + 1 + 2); // 112
// }

// {
//     console.log("9" > "19"); // true
//     console.log("09" > "19"); // false
// }

// {
//     const f = new Boolean(false);

//     if(f){
//         console.log(1);
//     }
//     else{
//         console.log(2);
//     }

//     console.log(typeof f); // object // 1
// }

// {
//     let x = 100;
//     let y = x++;
//     console.log(y); // 100
//     let z = ++x;
//     console.log(z); // 102

//     let n = (x==y)? z++ : ++z; // ++z is run and answer is 103


//     console.log(n);
// }

// {
//     var x = 0;

//     if(10 > 9 > 8)
//     {
//         x += 1;
//     }
//     console.log(x); // 0
// }