/*
When a customer pays with:

$5 → no change needed.

$10 → give back one $5.

$20 → give back either one $10 and one $5 or three $5s.

*/


function lemonadeChange(bills) {
    let five = 0;
    let ten = 0;
  
    for (let bill of bills) {
      if (bill === 5) {
        five++;
      } else if (bill === 10) {
        if (five === 0) return false;
        five--;
        ten++;
      } else if (bill === 20) {
        if (ten > 0 && five > 0) {
          ten--;
          five--;
        } else if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
      }
    }
  
    return true;
  }


  console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
  console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
  console.log(lemonadeChange([5, 5, 10])); // true
  console.log(lemonadeChange([10, 10])); // false
    