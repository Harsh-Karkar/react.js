{
  // console.log(this);
}

{
  // function sum(a ,b) {
  //     add = a + b ;
  //     console.log("sum of two num. is " , "= ",add);
  //     console.log(this);
  // }
  // sum(2 , 4);
}

{
  // const harsh = {
  //     name:"harsh karkar",
  //     qualif:"bca",
  //     sum: function(){
  //          add = 2+2;
  //         console.log(add);
  //         console.log(this.name);
  //         console.log(this);
  //     }
  // }
  // harsh.sum();
}

{
  // const harsh = () => {
  //     const person = {
  //       name: "Harsh Karkar",
  //       city: "Ahmedabad",
  //       sum: function () {
  //         const add = 2 + 2;
  //         console.log(`Sum: ${add}`);
  //         console.log(`Name: ${this.name}`);
  //         console.log(`Context: ${JSON.stringify(this)}`);
  //       },
  //     };
  //     person.sum();
  //   };
  //   harsh();
}

{
  // const hari = () => {
  //     console.log(this);
  // }
  // hari();
}

{
  // this.name = "harsh vardhan"
  // console.log(this.name);
}

{
  function hari(){
    this.name = 'harsh vardhan'
    console.log(name);
  }
  let NewObj = new hari()
  console.log(NewObj);
}
