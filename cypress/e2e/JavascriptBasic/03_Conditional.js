//If the cart value is above and equal to $1000 then provide the discount of 
//10 percent
function cartValueDiscount(cartTotal)
{
    if(cartTotal>=1000 && cartTotal<=1999)
    {
        console.log('Customer is eligible for 10 percent')
        let discoutTotal;
        discoutTotal = cartTotal*0.1
        console.log('Customer is given an discount of - ',discoutTotal);
        let actualPrice = cartTotal-discoutTotal;
        console.log('Actual price of the Cart - ', actualPrice);
    }
    else if(cartTotal>=2000 && cartTotal<=3999)
    {
        console.log('Customer is eligible for 20 percent')
        let discoutTotal;
        discoutTotal = cartTotal*0.2
        console.log('Customer is given an discount of - ',discoutTotal);
        let actualPrice = cartTotal-discoutTotal;
        console.log('Actual price of the Cart - ', actualPrice);
    }
    else
    {
        console.log('Invalid Input');
    }
}

cartValueDiscount(3000);

//5 Browser

let browser = "chrome";

switch(browser)
{
    case "chrome":
        console.log("execute in chrome browser");
        break
    case "edge":
        console.log("execute in edge browser");
        break
    case "firefox":
        console.log("execute in firefox");
        break
    case "opera":
        console.log("execute in opera");
        break
    default:
        console.log("Invalid selection");
}

//superadmin, admin, master

//environment selection dev, qa, stage, uat, prod

//Assertion - visiblity, textContent

//Ternary Operator -- one line if else
let flag = false;

let message = flag ? "It is true":"It is false";

console.log(message);

const env = "stage";
console.log(env);

const baseURL = env === "qa" ? "qa.amazon.com" : env === "stage" ? "stage.amazon.com": env ==="uat"?
"uat.amazon.com":"dev.amazon.com";

console.log(baseURL);