let m = "hello";
let n = "I am new to Javascript";
let demo = n.toUpperCase();
console.log(demo);
demo = n.toLowerCase();
console.log(demo);

//substring() and slice()

let demomessage = "Your order is booked successfully - FLRSDMO9348";

let orderid = demomessage.slice(demomessage.indexOf('-')+2)

console.log(orderid);


let demoArray = demomessage.split(' ');
console.log(demoArray);
console.log(demoArray[2]);
let l = demoArray.length
console.log(demoArray[l-1]);
//console.log(demoArray[demoArray.length]);
let emailValue = "demoadmin  @  office.com";
let domain = emailValue.split('@')[1].trim();
console.log(domain)
//trim() - Before and After white space

