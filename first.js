/*
after opening folder : open terminal-cmd propmpt :git clone repolink
syntax to save: fname.js
create a file first.js inisde folder and right click, click open in integrated terminal ->in terminal - node first.js, get output
comment:select and ctrl+/

to push a folder or full project to git:
in terminal go to folder path : git branch->git status->git add. ->git commit -m "statements"->git push

variables - store data
var -can be re-declared and  re-initialised,function scope
let- cannot be redeclared but can be re-initialised,blocked scope
const- cannot be re-declared or re-initialised,blocked scope
 
Functions- always call the functn name to get output
: fnctn declaration , fnctn expression, fnctns w parameter

Datatypes-primitive and non-primitive

Operators:arithmetic,assignment,comparison

Conditions-if .ifelse,switch

Loops-while,dowhile,for
String methods-length,concat,charat,tocases
Arrays
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



 function accept(text){

    if(text=='Tier1')
    {
        console.log('i will get a package of 10lpa')
    }
   else if(text=='Tier2')
   {
    console.log('5lpa')
   }
   else if(text=='Tier3')
   {
    console.log('2lpa')
   }
   else{
    console.log('error')
   }

 }
 accept('Tier2')

//switch
function switches(type){
 switch(type){
    case "tier1":
    console.log("10lpa")
    break
    case "tier2":
    console.log("5lpa")
    break
    case "tier3":
        console.log("2lpa")
        break
    default:
        console.log("error")
        break
}}
switches("tier1")

//terenary-check syntax
//(3>1)?"true":"false"

//LOOPS: while,dowhile,for

//STRING METHODS-.length,.charAt,.concat,
let name10="spoo";  let name11="vani";
console.log(name10.length)
console.log(name10.charAt(1))
console.log(name10.length)
let val=name10.concat(name11) //let val=name10+name11
console.log(val)

let cases="     spoorthi      "
console.log(cases.toLocaleUpperCase())
console.log(cases.repeat(2)) /*for repeating words*/
console.log(cases.trim())
console.log(cases.trimEnd())/*only removes sppace of end*/
console.log(cases.trimStart())

let os ="i am in bangalore"
console.log(os.search('nga'))
console.log(os.search('ooo'))
console.log(os.search('rol'))/*if search is invalid(ooo) or not from lefttoright order(rola), then it shows -1 or else the index of wer the elements first letter is present*/

console.log(os.split("   "))/*no space between quotes splits as single characters, one space bwteen quotes gives i,am,in.. two spaces gives i am in blr*/
console.log(os.split("").reverse()) /*reverse does Never work without split*/ 
console.log(os.split("").reverse().join("")) /*to split,reverse and join the reversed*/ 

/*Pattern program*/
for(let i=1;i<=5;i++){
    
    console.log("*".repeat(i))
}

for(i=1;i<=5;i++)
{
    let text=""
    for(let j=1;j<=i;j++)
    {
        text=text+"*"
    }
    console.log(text)
}


//ARRAY-in js ,array isnt collection of same d.type,,any type works
let a=[1,'pavan',true]
let data=new Array(1,'pavan',true)
console.log(a)
console.log(data)
a.push(7)
console.log(a)
a.pop()
console.log(a)