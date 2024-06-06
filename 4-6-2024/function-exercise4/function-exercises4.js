/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, geoLocation, partnername, numofKids) {
    let future = 'You will be a ' + jobTitle + ' in ' + geoLocation +','+ ' and married to ' +
    partnername + ' ' + ' with ' + numofKids + ' kids.';
    return console.log(future);
}
tellFortune('software engineer','Jordan', 'Alice', 3 );

/*----------------------------------------------------------------------------------------------------*/
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age) {
    let dogYears = 7*age;
   return console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
/*----------------------------------------------------------------------------------------------------*/


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
    let maxAge = 100;
  let totalNeed = (amountPerDay * 365) * (maxAge - age);
    let message = 'You will need ' + totalNeed + ' cups of tea to last you until the ripe old age of ' + maxAge;

    return console.log(message);
  }

calculateSupply(30,3);

/*----------------------------------------------------------------------------------------------------*/
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
    return console.log('hello'+' '+name);
}
greet('Duha');

/*----------------------------------------------------------------------------------------------------*/

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double(x) {
 return  ( 2 * x);
}

function double(xy) {
    return 2 * y;
  }

  function double(z) {
    return 2 * z;
  }
  /*----------------------------------------------------------------------------------------------------*/
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x ){      //func |  )
  return 2 * x ;
}

function double2(x)  {   // space betwwen function and function namr | (  |{
return 2 * x;
}

function double3(x)  {  //name of function it must put it after function key directly | }
  return 2 * x;}


/*----------------------------------------------------------------------------------------------------*/
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
  return  console.log(x * x *x);
}

cube(4);

/*----------------------------------------------------------------------------------------------------*/
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(p1,p2)
{
  return console.log(p1 *p2);
}
multiply(3,4);
multiply(5,4);
/*----------------------------------------------------------------------------------------------------*/
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense (age)
{
  let access_age=20;
  if(age>=access_age){
    return console.log("yes you can");
  }
  else{
    return console.log('please come back after '+ (access_age-age)+' years to get one');

  }
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);
/*----------------------------------------------------------------------------------------------------*/
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1,str2)
{
  if(str1.length  == str2.length ){

      return console.log('True');
  }
  else{
    return console.log('False');
  }
}
sameLength("tree","clue");
sameLength("tree","car");
/*----------------------------------------------------------------------------------------------------*/
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(n1,n2)
{
  if(n1>n2){
    return console.log(n1)
  }
  else{
    return console.log(n2)
  }
}
largerNubmer(5,6);
largerNubmer(5,3);
/*----------------------------------------------------------------------------------------------------*/
/*
12
Write a function called smallerNubmer
that eaccpt three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(n1,n2,n3){

  if(n1<=n2 && n1<=n3){
    return console.log(n1);
  }
  else if( n2<=n1 && n2<=n3){
    return console.log(n2);
  }
  else{
    return console.log(n3);
  }
}

smallerNubmer(8,6,7);
smallerNubmer(5,99,34);
smallerNubmer(5,99,3)
smallerNubmer(5,3,3);

/*----------------------------------------------------------------------------------------------------*/
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> tr

Ex: shorterString("air","tr","car","github","by")
=> tr

*/

function shorterString(str1,str2,str3,str4,str5){
if(str1.length<=str2.length && str1.length<=str3.length && str1.length<=str4.length && str1.length<=str5.length)
  {
    return console.log(str1);
  }
else if(str2.length<=str1.length && str2.length<=str3.length && str2.length<=str4.length && str2.length<=str5.length)
  {
    return console.log(str2);
  } 
else if(str3.length<=str1.length && str3.length<=str2.length && str3.length<=str4.length && str4.length<=str5.length)
  {
    return console.log(str3);
  }
else if(str4.length<=str1.length && str4.length<=str2.length && str4.length<=str3.length && str4.length<=str5.length)
  {
    return console.log(str4);
  }
else if(str5.length<=str1.length && str5.length<=str2.length && str5.length<=str3.length && str5.length<=str4.length)
  {
    return console.log(str5);
  }

}

shorterString("air","school","car","by","github");
shorterString("air","tr","car","by","github");
shorterString("by","tr","car","air","github");
shorterString("air","by","car","school","github");
shorterString("air","tr","by","car","github");
shorterString("air","tr","car","github","by");

/*----------------------------------------------------------------------------------------------------*/
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(s1,s2,s3,s4)
{
  if(s1.length>=s2.length && s1.length>=s3.length && s1.length>=s4.length)
    {
      return console.log(s1);
    }
  else if(s2.length>=s1.length && s2.length>=s3.length && s2.length>=s4.length )
    {
      return console.log(s2);
    } 
  else if(s3.length>=s1.length && s3.length>=s2.length && s3.length>=s4.length)
    {
      return console.log(s3);
    }
  else 
    {
      return console.log(s4);
    }
}
longerString("air","school","car","github");
longerString("air","schoo","car","github");

/*----------------------------------------------------------------------------------------------------*/


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number)
{
  if(number %2 ==0)
    {
      return console.log('True');
    }
    else
    {
      return console.log('False');
    }
}
isEven(1);
isEven(2);

/*----------------------------------------------------------------------------------------------------*/
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(number)
{
  if(number %2 !=0)
    {
      return console.log('True');
    }
    else
    {
      return console.log('False');
    }
}
isOdd(4);
isOdd(5);
/*----------------------------------------------------------------------------------------------------*/
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num)
{
  if(num>=0)
    {
      return console.log(num);
    }
    else
    {
      return console.log(-1*num);
    }
}
positive(4);
positive(-5);

/*----------------------------------------------------------------------------------------------------*/
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(para1,para2)
{
  return console.log(para1 + " "+para2);
}

fullName("Adam","McCallen");
fullName("Alex", "Mercer");
/*----------------------------------------------------------------------------------------------------*/
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5)
{
  return console.log((n1+n2+n3+n4+n5)/5);
}

average(1,2,3,4,5);
average(5,7,9,3,5);
/*----------------------------------------------------------------------------------------------------*/
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber()
{
  return console.log(Math.random());
}

randomNumber();

/*----------------------------------------------------------------------------------------------------*/
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min, max)
{
  return  console.log(Math.random() * (max - min) + min);
}

randomBetweenNumbers(1,8);
randomBetweenNumbers(3,100);

/*----------------------------------------------------------------------------------------------------*/
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score)
{
  if(score<=49){
    console.log("F");
}
else if(score >=50 && score<=69){
    console.log("D");
}
else if(score>=70 && score<=84){
    console.log("C");
}
else if(score>=85 && score<=94){
    console.log("B");
}

else{
    console.log("A");
}
}
scoreInUniversty(96);
scoreInUniversty(3);
scoreInUniversty(71);
/*----------------------------------------------------------------------------------------------------*/
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter() {
  let count = 0;
  
   return function() {
    count += 1;
   return count ;
  };
}
const myCounter = counter();


console.log(myCounter());  // Output: 1
console.log(myCounter());  // Output: 2
console.log(myCounter());  // Output: 3

/*----------------------------------------------------------------------------------------------------*/
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function counter() {
  let c = 0;
  let counter_Function = function() {
      return c++;
  };

  counter_Function.reset = function() {
      c = 0;
  };

  return counter_Function;
}

let c = counter();
console.log(c()); 
console.log(c()); 
c.reset();
console.log(c());
