/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let x=250;
console.log(x*(2.5/100));
/*----------------------------------------------------------------------------------------------------------*/


/*
Array Tasks : 
1
Correct the syntax error
*/
// [ 1,7  9  45, ]        //missed coma between element  //forget the declaration
let arr=[1,7,9,45];
for (array of arr)
    {
        console.log(array);
    }
   
   // solution2
   console.log(arr);
//  ["Str" "alex","moh"       // missed ] close bracet and comma  //forget the declaration

let arr2=["Str", "alex","moh" ]
for (array of arr2)
    {
        console.log(array);
    }
     // solution2
   console.log(arr2);

//  'the','fox' 'over' lazy, 'dog',  ]     //missed [ start | comma |' |comma at the end |lazy ''| //forget the declaration

let arr3=['the','fox' ,'over', 'lazy', 'dog']
for (array of arr3)
    {
        console.log(array);
    }
     // solution2
   console.log(arr3);
/*----------------------------------------------------------------------------------------------------------*/
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"];
let tomatoIndex=fruits.indexOf("Tomato");
console.log(tomatoIndex);  // index 0
let BananaIndex=fruits.indexOf("Banana");
console.log(BananaIndex); // index 1
/*----------------------------------------------------------------------------------------------------------*/
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let FavoriteFood=["maqloba","tabolah"];
let FavoriteSport=["running","Bowling","Horse Racing"];
let FavoriteMovies=["The Call","Ocean 14"];

/*----------------------------------------------------------------------------------------------------------*/

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let number=[5,10,15,20];

let firstElement=number[0];
console.log(firstElement);

/*----------------------------------------------------------------------------------------------------------*/
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let number1=[5,10,15,20];

let LastElement=number1[number1.length-1];
console.log(LastElement);
/*----------------------------------------------------------------------------------------------------------*/
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);
console.log(array);
/*----------------------------------------------------------------------------------------------------------*/

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [];
array2.unshift(5,9,-7,3.5);
console.log(array2);

/*----------------------------------------------------------------------------------------------------------*/

/*8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 console.log(arr1.sort());