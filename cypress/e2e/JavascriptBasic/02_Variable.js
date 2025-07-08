//var
//functional scope
//redeclaration


function passwithParamter(a,b)
{
    let sum = a + b;
    console.log(sum);
}

passwithParamter(12,"34");





function nameOfFunc()
{
    //console.log(a);
    let a = 100;
    console.log(a);

}
nameOfFunc();

let a = 1000;
console.log(a);

function nameOfFunc1()
{
    //console.log(a);
    console.log(a);
    a = 101;

}

nameOfFunc1();
console.log(a); 

console.log('============================')
// const
const bool = true;
//bool = false;
console.log(bool)
{
const bool = false;
const mo = false;
console.log(mo)
console.log(bool)
}
//console.log(mo)
console.log(bool)

console.log('============================')

//let
let m;
console.log(m)
{
    let m = 100;
    console.log(m)
    m = 15;
    console.log(m)
}
console.log(m)
m = 150
console.log(m)

//var

var username, password;
//this