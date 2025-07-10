// For loop
for(let i = 0; i < 10; i++)
{

    console.log("Value - ", i);

}

// Locators - CSS - Multiple Matching Webelement
/* <a data-v-6475d26d="" class="oxd-main-menu-item" 
href="/web/index.php/admin/viewAdminModule">
<svg data-v-bddebfba="" data-v-6475d26d="" 
xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 500 500" 
role="presentation" class="oxd-icon oxd-main-menu-item--icon">
*/
// Tag --> HTML Tag
// Attribute --> HTML Tag Attribute
// Attribute Value

//Validate all the menu option
//[class="oxd-main-menu-item-wrapper"]
// for(let i=0; i<=locator.length; i++)
// {
// cy.get().nth(i).isVisible();
// }

//CSS - 
// -> If classname is available then CSS - .classname
// -> If id is available then CSS - #id
// -> If attribute and value is available - [attribute = 'Value']
// -> If attribute, value and tagname is available - tagname[attribute = 'Value']
// -> SelectorHub - https://selectorshub.com/
// cy.xpath('')

//a[id='mz-product-grid-image-28-212408'] div[class='carousel-item active']
//[class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]:nth-child(3)
// text()

let k = 0;

while(k < 10)
{
    console.log("I am in while loop");
    k++;
}

let m = 1;

do
{
    console.log('I am in do while')
    m++;
}   
while(m<5);

//Array
let countryName = ["USA", "NZ", "India"] //Expected Value

for(let cn of countryName)
{
    console.log(cn);
}

let personDetail = {
    firstname:"John",
    lastname:"Doe",
    age:12
}

for(let demo in personDetail)
{
    console.log(`${demo}: ${personDetail[demo]}`)
}

var data =[
	{
		"full_name":"Adele Schiller",
		"phone":"+1 020-136-6365",
		"email":"adele18@hotmail.com"
	},
	{
		"full_name":"Alia Upton",
		"phone":"+1 996-353-8731",
		"email":"alia.upton@gmail.com"
	},
	{
		"full_name":"Vesta Erdman",
		"phone":"+1 761-048-0461",
		"email":"vesta.erdman@yahoo.com"
	},
    {
		"full_name":"Vesta Erdman",
		"phone":"+1 761-048-0461",
		"email":"vesta.erdman@yahoo.com"
	}

];

const tempo = 140;

data.forEach((item, index) =>{

    console.log(`Record Number - ${index + 1} `)
    console.log(`Full name - ${item.full_name}`)
    console.log(`Phone Number - ${item.phone}`)
    console.log(`Email - ${item.email}`);
    if(` ${item.full_name}` === 'Adele Schiller' && `${item.email}` === 'adele18@hotmail.com' )
    {
        console.log(tempo, `Phone Number - ${item.phone}`)
    }

})

for(const [index, item] of data.entries())
{
    console.log(`Record Number - ${index + 1} `)
    console.log(`Full name - ${item.full_name}`)
    console.log(`Phone Number - ${item.phone}`)
    console.log(`Email - ${item.email}`);
}



