/* 1. Write a JavaScript program that accept two integers and
 display the larger*/

 let largenumber=large;

 function large( num1,num2)
 {
    if(num1>num2)
        {
        return num1;
        }
    else return num2;
 }

 console.log(large(4,6));
/*--------------------------------------------------------------------------*/
 /* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor */



 function product(n1,n2,n3){
    return n1*n2*n3;
 }

 let productResult=product(2,2,2);
 
 function findSign(n){
   if(  productResult<=0)
    {
        return sign="+"
    }
    else{
        return sign="-"
    }
}  
  window.alert(findSign(product()));

/*--------------------------------------------------------------------------*/
/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. */

let x = 0;
let y = -1;
let z = 4;


if (x > y && x > z) {
    if (y > z) {
        window.alert(x + ", " + y + ", " + z);
    } else {
        window.alert(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        window.alert(y + ", " + x + ", " + z);
    } else {
        window.alert(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        window.alert(z + ", " + x + ", " + y);
    } else {
        window.alert(z + ", " + y + ", " + x);
    }
} 


/*--------------------------------------------------------------------------*/
/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

let a = -5;
let b = -2;
let c = -6;
let d = 0;
let f = -1;
if(a>b && a>c && a>d && a>f){
    window.alert("the largest number"+" "+a);
}
else if(b>a && b>c && b>d && b>f){
    window.alert("the largest number"+" "+b);
}

else if(c>a && c>b && c>d && c>f){
    window.alert("the largest number"+" "+c);
}

else if(d>a && d>b && d>c && d>f){
    window.alert("the largest number"+" "+d);
}
else if(f<a && f>b && f>c && f>d){
    window.alert("the largest number"+" "+f);
}
/*--------------------------------------------------------------------------*/

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

 let x1=5;
 let y1=9;
 if(x1>y1)
    {
        console.log("Hello World" )
    }
    else{
        console.log("Goodbye");
    }