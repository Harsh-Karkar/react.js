{
    let test = async () => {
        console.log(`2 message`);
       let responce =(await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        console.log(`4 message`);
        return responce;
    }

    console.log(`1 message`);
    test().then((res) =>{
        document.getElementById("hey").innerHTML = res;
    });
    console.log(`5 message`);
}