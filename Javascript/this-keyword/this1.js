/* Global Use */
 /* Length , toString , name */

// let max = this;
// console.log(max);
// windows{}


// this.name = "skillQode"

// console.log(this.name);



/* Inner Function */

// function Grow(){
//   console.log(this);
// }
// Grow();

// window{}


/* Constructor Function */


// function grow(){
//   this.name = 'Javascript'
//   console.log(name);
// }

// let NewObj = new grow()

// console.log(NewObj);


/* this Keyword in Arrow Function */


// const newFunc = () => {
//   console.log(this);
// }

// newFunc()

// window{}

// const Obj = () =>{
//   this.name = 'JQuery'
//   console.log(name);
// }

// Obj();


/* function.length Method */

// function greet(){

// }

// console.log(greet.length);

// function greets(a  , b , c = 10){

// }

// console.log(greets.length);


/* function.toString() */

// function greet(){
//   console.log('SkillQode');
// }


// console.log(greet.toString());


// console.log(() => console.log('data').toString());

/* function.name */

// function greet(){

// }

// console.log(greet.name);


/* this Inside Inner Function */

// {
//   const person = {
//     name : 'Jack',
//     age: 25,
//     greet() {

//         console.log(this);        
//         console.log(this.age);  

//         const innerFun = () => {
//             console.log(this);       
//             console.log(this.age); 
//         }

//         innerFun();
//     }
// }

// person.greet();

// }
