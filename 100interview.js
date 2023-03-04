//                        💛💚🤍ANuj🔆Kashyap💛💙💜

//🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣🔴🟡🟢🔵🟣
// *******************************************************************************************
//🟡Question:1  What is typeof []
//🟢Answer: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr).
// ************************************************************************************************************************

//🟡Question:2

// let a = [];
// let b = [];
// console.log(a == b); //false
// console.log(a === b); //false
//🟢Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.

// ************************************************************************************************************************
//🟡Question:3
// let a = [];
// let b = a;
// console.log(a == b); //true
// console.log(a === b); //true
//🟢Explaination : Here we are assigning a to b, where memory location is now same.

// ************************************************************************************************************************
//🟡Question:4
// let z = [1, 2, 3];
// let a = { name: "Anuj" };
// console.log(...z); // 1 2 

//🟢Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.

// ************************************************************************************************************************
//🟡Question:4
// const set = new Set([1, 1, 2, 2, 3, 4, 5]);
// console.log(set); //{1,2,3,4,5}

//🟢Explaination : The Set object lets you store unique values of any type.It will remove duplicate values.
 
// ************************************************************************************************************************
//🟡Question:5
// const data = ["Anuj", "Ajay", "Ajeet"];
// const [y] = data;
// console.log(y); //"Anuj"
//🟢Explaination : We are doing destructuring here. y is representing the first index only

//🟡 
//const data = ["Anuj", "Ajay", "Ajeet"];
// const [y,z] = data;
// console.log(y,z); //"Anuj", "Ajay"
//🟢Explaination : We are doing destructuring here. y is representing the first index only and z representing the second index.
// ************************************************************************************************************************
//🟡Question:6
//Spread Operator
// const arr=[3,4,3,2,42,2];
// const myfun=(Result)=>{
//     return Result;
// }
// console.log(myfun([...arr]));//[ 3, 4, 3, 2, 42, 2 ]
//🟢 at the time of function calling it takes the array of input. 


//🟡
//REST Operator
//  const myfun=(a,b,c,...restvalues)=>{
//     // return a+b+c;
//     return restvalues;
//  }
//  console.log( myfun(2,4,2,3,5,6,4,2,));
 
//🟢 the rest value store in the form of Array.Using the rest parameter will pass the arguments as array elements.

// ************************************************************************************************************************
//🟡Question:7
// let data ={name:"Anuj"}
// let data1={city:"Lucknow"}
// data = {data, ...data1} //merge 2 objects
// console.log(data); // { "data" : {name:"Anuj"}, "city": "Lucknow"}

//🟢 Explaination :Three dots will pop out the property from an object and assign inside curly brackets. If we didn't do destructing or spread operator then key will be object name(i.e, data) and assign the value as whole object into it.

// ************************************************************************************************************************
//🟡Question:8
//console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}

//🟢Explaination : While doing resolve(), itself here a promise. If we pass number/string etc then it will print fulfilled.

// ************************************************************************************************************************

//🟡Question:9
// JSON.parse ?

// Parse JSON object to a JavaScript value // converting data into js object

//🟢Explaination :
// var jsonPerson = '{"first_name":"billy", "age":23}';
// var personObject = JSON.parse(jsonPerson); //parse json string into JS object

//console.log(typeof(jsonPerson)); //string
//console.log(typeof(personObject)); //object


// ************************************************************************************************************************
//Hoisting used here

// let name  = "Anuj";
// function getName(){
//   console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
//   let name = "Ajeet";
// }
// getName();
//🟢Explaination : Hoisting used here. If we use VAR then can use variable before declare. But in LET we can't do that. LET/CONST need declaration first then can use it.
// ************************************************************************************************************************
 //🟡Question:10     
// let name  = "Anuj";
// function getName(){
//   console.log(name); //Anuj
// }
// getName();
//🟢Explaination : Let is a block scope.Because of closures we can able to access name which is outside of a function with LET.
// ************************************************************************************************************************
 //🟡Question:10 
// let person = {name: "Anuj"};
// Object.seal(person); //post seal, how can you modify the person object
// person.age ="1000";
// person.name ="Ajay";
// console.log(person); //{name : "Ajay"}

//🟢Explaination : Onceyou use Seal we can't able to add the more keys with values into it.But you can modigy the existing key.

// ************************************************************************************************************************
//🟡Question:11      shift🔅Pop

// let data = [2,9,0,10];
// data.shift();//remove first element
// console.log(data); //[9,0,10]
// data.pop(); //remove last element
// console.log(data);//[9,0]
//🟢Explaination : shift and pop use to remove the elements from first and last index.
 
// ************************************************************************************************************************
//🟡Question:12 //check the value is even or odd
// let a =10;
// console.log(a%2===0 ? true : false); //true

//🟢Explaination : Need to divide by 2 and then checking if reminder is zero/one.

// ************************************************************************************************************************
//🟡Question:12
// let data ={ name : "anuj"};
// delete data.name;
// console.log(data); //{}
//🟢Explaination : delete always work with object properties not a object itself.
// ************************************************************************************************************************
//🟡Question:12

// 🟢Diff between Map and foreach: Map will return new thing but Foreach didn't return anything.

// 🔆forEach()-->
// Example:
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function(num) {//does not return anything
//   console.log(num * 2);
// });
// Output: 2 4 6 8

// 🔅map()-->

// const doubledNumbers = numbers.map(function(num) { //retrun the value
//   return num * 2;
// });
// console.log(doubledNumbers);
// Output: [2, 4, 6, 8]

// loop through the elements allocates memory 
// and stores return values by iterating main array

// ************************************************************************************************************************
//🟡Question:13 //merge 2 arrays
// const a =[1,2,3];
// const b =[4,5,6];
// const c =[...a, ...b]
// console.log(c); //[1,2,3,4,5,6]

//🟢Explaination : using spread operator

// ************************************************************************************************************************
//🟡Question:14
// let a=2;
// setTimeout(()=>{
//   console.log(a); //100
// },0)
// a=100;

//🟢Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.

// ************************************************************************************************************************

//🟡Question:15
// function fruit(){
//   console.log(name); //undefined
//   console.log(price); //Error
//   var name = "priya";
//   let price = 1000;
// }
// fruit()
//🟢Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.

// ************************************************************************************************************************
//🟡Question:15

// for(var i=0; i<3; i++){ //i=0 //1 //2 //3
//   setTimeout(()=>console.log(i),1) // 3,3,3
// }
//🟢Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.

// ************************************************************************************************************************
//🟡Question:16
// for(let i=0; i<3; i++){ //i=0 //1 //2 //3
//   setTimeout(()=>console.log(i),1) //0 //1 //2
// }

//🟢Explaination : LET is a block scope. so it will print 0,1,2. Its having own islocated scope.

// ************************************************************************************************************************
//🟡Question:16
// let data = "size";
// const bird = {size : "small"}
// console.log(bird[data]); //small
// console.log(bird["size"]); //small
// console.log(bird.size); //small
// console.log(bird.data); //undefined

//🟢Explaination : If we wants to access variable with object then use [] notation(. notation will not work).

// ************************************************************************************************************************
//🟡Question:17    //preincrement and postincremen
// let num = 0;
// console.log(num++); //0
// console.log(++num); //2
// console.log(num); //2

//🟢Explaination : ++ will increase the value by 1. preincrement and postincrement used here.

// ************************************************************************************************************************
//🟡Question:18 

// for(let i=1; i<5; i++){
//   if(i==3) continue;
//   console.log(i); //1,2,4
// }
//🟢Explaination : If i =3 then it will not execute the code for 3, but can execute for i=4.

// ************************************************************************************************************************
//🟡Question:19 
// const foo = () => console.log("first");
// const bar = () => setTimeout(()=> console.log("second"));
// const baz = () => console.log("third");
// bar();
// foo();
// baz();
//🟢Explaination : first,third, second. Because asyn operation work post all the syn operation get complete.

// ************************************************************************************************************************
//🟡Question:20

// console.log(setInterval(()=>console.log('Hi'), 1000));
// console.log(setInterval(()=>console.log('Hi'), 1000));
// console.log(setInterval(()=>console.log('Hi'), 1000));

//🟢Explaination: setInterval will give uniques id to stop. It will give like 1,2,3. so it will print 1,2,3,Hi,Hi, Hi, Hi, Hi, .....so on

// ************************************************************************************************************************// ************************************************************************************************************************

//🟡Question:21
// console.log(setTimeout(()=>console.log('Hi'), 1000));
// console.log(setTimeout(()=>console.log('Hi'), 1000));
// console.log(setTimeout(()=>console.log('Hi'), 1000));

//🟢Explaination : it will print 1,2,3,Hi,Hi, Hi.

// ************************************************************************************************************************
//🟡Question:21

//console.log([..."Anuj"]); //[ 'A', 'n', 'u', 'j' ]

//🟢Explaination: It will convert into an array.

// ************************************************************************************************************************
//🟡Question:22

// const person = {name: "Anuj", age: 1000};
// for(const item in person){
//   console.log(item); //name, age
// }
//🟢Explaination: For in loop give a keys only.
// ************************************************************************************************************************// ************************************************************************************************************************
//🟡Question:23
// let data = [1,2,3].map( num =>{
//   if (typeof num === 'number') return;
//   return num*2;
// })
// console.log(data); //[undefined,undefined,undefined]

//🟢Explaination: If just return then it will print undefined.

// ************************************************************************************************************************
 //🟡Question:24 //Map function
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);

// Expected output: Array [2, 8, 18, 32]
//🟢The map() method creates a new array
// ************************************************************************************************************************
// ************************************************************************************************************************
// ************************************************************************************************************************
// ************************************************************************************************************************

// ************************************************************************************************************************// ************************************************************************************************************************// ************************************************************************************************************************
