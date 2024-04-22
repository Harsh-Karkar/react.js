// function loadData(){
//     let xhttp = new XMLHttpRequest();   
//     xhttp.onreadystatechange=function() {
//         if (this.readyState ==  4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
    
//     xhttp.open("GET", "./hello.txt", true);  
//     xhttp.send();
// }

{
    // async function f(){
    //     console.log("async Action");
    //     return Promise.resolve(1);
    // }
}

{
    // let promise = new Promise(function(resolve,reject){
    //     resolve("promise Resolve");
    //     console.log(result);
    // })
    // .then((value)=>{console.log(value)})
}

{
    let promise1 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Promise resolve 1');
        },4000);
    });

    let promise2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Promise resolve 2');
        },10000);
    });
    // async function

    async function asyncfun(){
        let value = await promise1;
        let value1 =await promise2;
        console.log(value);
        console.log(value1);
        console.log("hello");
    }

    // function calling

    asyncfun();
}
