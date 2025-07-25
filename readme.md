Project - D Drive
-----------------

Name of Project(Folder) - CitiBank_Payment

Open via VS Code - CitiBank_Payment

Commands - Open the folder in the Terminal  

Step 1 - npm init - It will create a package.json with some data (Configuration data which can be updated later on)

Step 2 - Installation of Cypress - npm install cypress --save-dev

Step 3 - npx cypress open 

-------------------------
describe - test scenarios -> multiple test cases
it - test cases

describe('Login Test Cases')
{
    it('Validate with V and V')

    it('Validate with V and I')

    it('Validate with I and I')

    it('Validate with V and I')

}


===============================================
7th July 2025
-------------

Git - Install git from - https://git-scm.com/
On Windows - cmd - "git -v"


GitHub Application - https://github.com/ 
Create an account on the above URL - '@gmail.com'
Please create a password

SCM - Source Code Management
---------------------------

bitbucket
gitlab
circle CI
tortoise SVN

Editor
------
pyCharm
intelliJ
Eclipse
cursor

===========================
-> git status - It will help understand the change which has been done by us once you clone
-> git add <filename> will add that file to Staging area
-> git add . -> will add all the file to Staging area
-> git commit -m "Commit Message" -> It will commit the changes
-> git push main origin

============================
Assignment - 10th July 2025 

Create a JS Program - 

1. Use for, forEach and retrieve the data from JSON, Javascript variable
Get Data from - https://autotestdata.com/

2. Use conditional statement to validate the Boundry Value 
(age<12 - Not Eligible)
(age>12 and age<20 - Ready)
(age>20 and age<30 - Enroll)

------------------------------------------------------------
Assignment - 12th July 2025
Write a JS Program for below cases - 
1. Check if a Number is Even or Odd
2. Reverse a String
3. Find the Largest Number in an Array
4. Sum All Numbers in an Array
5. Check if a String is a Palindrome

-------------------------------------------------------------
get()
visit()
should()
click()
type()
pause()
wait()
it.only()
it.skip()
--> Assertion

Assignment - 14th July 2025
---------------------------
1. Create a test case -https://ecommerce-playground.lambdatest.io/index.php?route=account/login - You need to register with unique user-email. Every time I need new email address.

2. Login with Same user.

Assignemtn - 16th July 2025
---------------------------

1. Failed -> Screenshot and Video -> Forcefully fail some test
2. Go through -> https://docs.cypress.io/api/commands/screenshot -> Add this in it block 

Note - Add below in cypress.config.js --

screenshotOnRunFailure:true, //This is for headless mode
video:true,


Assignment - 22nd July
----------------------
1. Navigate - https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers
2. Under Admin -> User Management -> Create new user -> Delete the same user.


Assignment - 25th July
----------------------

1. https://testautomationpractice.blogspot.com/ - Create around 7 to 8 IT block for handling alerts, checkbox, radiobutton, dropdown, textboxes