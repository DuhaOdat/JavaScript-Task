// 1. Write a JS code to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  
  console.log(i);
}
// /*--------------------------------------------------------------------------*/


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]
 for( n in arr)
    {
        if(arr[n]%2==0){
            console.log(arr[n]);
        }
    }


// /*--------------------------------------------------------------------------*/
/*3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

const num = 8;
for (let i = 1; i <= num; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += j + ' ';
    }
    console.log(str);
}

// /*--------------------------------------------------------------------------*/
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

let str = "don’t know why";
if(str.includes('y')){
    console.log("yes");
}
else{
    console.log("no"); 
}