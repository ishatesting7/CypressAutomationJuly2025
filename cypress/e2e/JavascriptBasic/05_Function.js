function createDemoValue()
{
    let demoCount = 10;
    return function(){
        demoCount++;
        return demoCount;
    }
}
//utility.js
const demo = createDemoValue();

console.log(demo());

console.log(demo());

console.log(demo());

//console.log(createDemoValue());
//console.log(createDemoValue());
//console.log(createDemoValue());

// await, async - to handle Promises 

async function functionName()
{
    let response = await get('url');
    //post, put, patch, delete, get
}


function calculateValueOfTax(percent)
{
    return function(amountValue)
    {
        return amountValue*percent;
    }

}

// then()
// cy.wrap()
// should()

/*

 get('baseurl').then(
    response    
    response.statuscode
    resposne.statumessage
)

*/

let x = 10;

const taxValue = calculateValueOfTax(0.50)
console.log(taxValue(5000))
console.log(taxValue(6000))


