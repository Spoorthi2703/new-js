/*after opening folder : open terminal-cmd propmpt :git clone repolink
syntax to save: fname.js
create a file first.js inisde folder and right click, click open in integrated terminal ->in terminal - node first.js, get output
comment:select and ctrl+/

variables - store data
var -can be re-declared and  re-initialised,function scope
let- cannot be redeclared but can be re-initialised,blocked scope
const- cannot be re-declared or re-initialised,blocked scope
 
Functions- always call the functn name to get output
: fnctn declaration , fnctn expression, fnctns w parameter

Datatypes-primitive and non-primitive

Operators:arithmetic,assignment,comparison

Conditions-

*/


console.log("my first code")

//VARIABLES 
//1st difference-redeclare and reinitialise
var names="spoo"
var names="vani"
console.log(names)//only prints vani

let city="blr"
//let city="mglr" -> shows error tat variable city is already defined
city="mangalore" //mangalore is output as let allows redeclared
console.log(city) 

const country="India"
//const country="usa"
console.log(country)// shows variable country is already declared

//2nd difference-function and block
{
    let name3="david"
    console.log(name3)
}
//console.log(name3) - shows error

{
    const name4="david"
    console.log(name4)
}
//console.log(name4) - shows error

{
    var name5="david"
    console.log(name5)
}
console.log(name5)



//FUNCTIONS
//1.fnctn declaration
function hello()
{
    console.log("first functn")
}
hello()

//2. fnctn expression
var hello=function(){
    console.log("first functn")
}
hello()
 // both give the same output , but just the name and syntax is different


 function sum(a,b){
    var c= a+b
    console.log("sum of"+ a+ "and "+b+"is"+c)
 }
 sum(9,8)

 //DATATYPES
 //primitive-number,string,boolean,array,null,undefined
 //non-primitive - object,symbol
 let value1=10
 console.log(typeof(value1))

 let value2=false
 console.log(typeof(value2))


 //OPERATORS
 //arithmetic(+-*/% ++ -- **:exponential),logical,assignment(+=, -=,),comparison(==:10=="10" is true-doesnt consider datatype,===,!=,!==,>,<,etc)


 //CONDITIONS
 function iseligible(value6)
 {
   if(value6<=18){
    console.log("eligible")
   }
   else{
    console.log("not eligible")
   }
 }
 iseligible(89)