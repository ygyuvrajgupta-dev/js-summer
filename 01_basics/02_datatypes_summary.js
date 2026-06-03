//Primitive data types are called by value
// --There are 7 types of primitive data types
//        string; number; boolean; null; undefined;
//        symbol; BigInt;


// Reference/Non-Primitive data types 
//  Arrays; objects; Function
//  # JavaScript is a dynamically typed language, you don’t need to declare variable types explicitly.


////////////////USE OF SUYMBOL//////////// use for assign uniques value.
const id = Symbol('123')
const AnotherId = Symbol('123')
// console.log(id==AnotherId)
// console.log(id===AnotherId)

const BigNumber = 356214789123458n
// console.log(typeof BigNumber)

const hero = ["Shaktiman","Nagraj","Naruto"]

let MyObj = {
    Name: "Yuvraj",
    Age: 18,

}

// const MyFunction = mfunction() {
//     console.log("Hello World");
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack And Heap Memory
// Stack Memory are Use In Primitive Data Types And Heap Memory Is Used In Non-Primitive 
let MyName = "Yuvraj"
let name = MyName
name = "YG"
// console.log(MyName);
// console.log(name);

let UserOne = {
    email:"ygupta@gmail.com",
    uid:123456,
    upiId:"okhdfc@ybl",
}

let UserTwo = UserOne;
UserTwo.email="mehta@gmail.com"
console.log(UserOne.email)
console.log(UserTwo.email)

// node 01_basics/02_datatypes_summary.js