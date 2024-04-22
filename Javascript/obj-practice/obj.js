//  1. JavaScript Object.assign()

{
  const objA = { name: "John", age: 30 };
  const objB = { city: "New York" };
  console.log(Object.assign(objA, objB));
}

{
  const obj1 = { x: 1, y: 2 };
  const obj2 = { y: 4, z: 5 };
  const result = Object.assign(obj1, obj2);
  console.log("result : ", result);
  console.log("obj1 : ", obj1);
}

{
  const Obj3 = { a: 1, b: 2 };
  const Obj4 = { c: 3, d: 4 };
  const resultObj = Object.assign(Obj3, Obj4);

  console.log("result", resultObj);
  console.log("obj4", Obj4);
  console.log("obj3", Obj3);
}

//  2. Javascript Object.create()
{
  const personProto = {
    sayHello: function () {
      return `Hi! I'm ${this.name}`;
    },
  };

  const john = Object.create(personProto);
  john.name = "John";
  console.log(john.sayHello());

  const paul = Object.create(personProto, {
    name: { value: "Paul" },
  });
  console.log(paul.sayHello());
}

{
  let animal = { type: "dog", legs: 4 };

  let cat = Object.create(animal);
  cat.type = "cat";
  delete cat.legs;
  console.log(cat);
}

{
  let car = {
    name: "buggati",
    price: "$20000",
    speed: "320km/h",
  };

  let bike = Object.create(car);
  bike.price = "$15000";
  bike.color = "red";
  console.log(bike);
}

// 3.  JavaScript Object.entries()

{
  const obj = { 2: "a", 1: "b", 3: "c" };
  console.log(Object.entries(obj));

  const arr = ["a", "b", "c"];
  console.log(Object.entries(arr));
}

{
  const obj = {
    name: "harsh",
    age: 21,
    location: "surat",
  };

  let Obj1 = Object.entries(obj);

  console.log(Obj1[2]);
}

{
  // //  Object.fromEntries() method is used to create an object from a sequence of key-value pairs.
  // const entries = [["name", "Harry"], ["age", 21], ["city", "London"]];
  // const myObj = Object.fromEntries(entries);
  // console.log(myObj)
}

{
  const obj5 = {
    name: "herry",
    age: 18,
    country: "USA",
  };

  const obj6 = { ...obj5, ...{ skills: "java" } };
  console.log(obj6);

  let myObj = Object.entries(obj6)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
  console.log(myObj);
}

// 4. JavaScript Object.is()

{
  // object.is()

  let x = 3;
  let y = 4;

  if (Object.is(x, y)) {
    console.log("Both variables have same value");
  } else {
    console.log("Both variables do not have the same value");
  }
}

{
  // Object.is() treats NaN as equal to NaN and does not consider +0 and -0 as equal to each other.

  let n1 = NaN;
  let n2 = NaN;
  let p1 = +0;
  let m1 = -0;

  console.log(`Object.is(n1,n2) : ${Object.is(n1, n2)}`); // Output: true
  console.log(`Object.is(p1,m1) : ${Object.is(p1, m1)}`); // Output: false
  console.log(`Object.is(+0,-0) : ${Object.is(+0, -0)}`); // Output: false
}

{
  // Object.is() method can also be used for deep comparison of objects.

  let o1 = { a: 1, b: { c: 2 } };
  let o2 = { a: 1, b: { c: 2 } };
  let o3 = { a: 1, b: { d: 2 } };

  console.log(`Object.is(o1, o2): ${Object.is(o1, o2)}`); // Output: false
  console.log(`Object.is(o1, o3): ${Object.is(o1, o3)}`); // Output: false
}

// 5. JavaScript Object.hasOwnProperty()
{
  let person = { name: "John", age: 30 };
  console.log(`person.hasOwnProperty('age') : ${person.hasOwnProperty("age")}`);
}

{
  let obj = { x: 1, y: 2 };

  delete obj.y;

  if (!obj.hasOwnProperty("y")) {
    console.log("The property y is deleted from the object");
  } else {
    console.log("The property y still exists in the object");
  }
}

{
  const person = { name: "John Doe", age: 25 };

  console.log(person.hasOwnProperty("name"));
}

// 6. JavaScript Object.freeze()
{
  let person = { name: "John", age: 30 };

  //   person.name = "harsh";
  Object.freeze(person);
  person.name = "Harry";

  console.log(person.name);
}

{
  let Harry = { age: 20, course: "react.js" };

  // Harry.age = 21;

  Object.freeze(Harry);

  Harry.age = 22;
  console.log(Harry.age);
}

{
  const Obj = { num: "1", num2: "2" };

  Obj.num = "10";

  Object.freeze(Obj);

  Obj.num2 = "20";

  console.log(Obj);
}

// 7. JavaScript Object.getOwnPropertyNames()
{
    const obj = {
        name: 'harsh',
        age: 20,
        address: 'junagadh',
      };
      const propertyNames = Object.getOwnPropertyNames(obj);
      
      console.log(propertyNames);
}

{
    let  person = {
        firstName : "raj",
        lastName : "kikani",
        age : 20,
        country : "India",
        city : "surat",
    }
    
    delete person.country;
    delete person["city"];
  
    let me = Object.getOwnPropertyNames(person)
    console.log(me)
}

{
    const fruit = {
        mango : "kesar",
        type : "fruit",
        from : "talala"
    }

    let junagadh = Object.getOwnPropertyNames(fruit);
    console.log(junagadh);
}