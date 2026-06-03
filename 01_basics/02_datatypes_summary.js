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
// node 01_basics/02_datatypes_summary.js