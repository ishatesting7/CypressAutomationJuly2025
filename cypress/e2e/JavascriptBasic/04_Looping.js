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