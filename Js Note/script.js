// <----------1---------->
//          Variables types 


// 1 = var
// 2 = let 
// 3 = const


// i) var a = "hello",
//    var a = "world",
//    a = "hii  buddy":

// ii) let a = "hello";
//    a =  "world";

// iii) const a = "hello world";




// <----------2---------->
/*          Data types 


 var x = "hello"; ------------>           String
 var x = 25; ------------------>          Number
 var x = true; ---------------->          Boolean
 var x = ["html","css","js"]; ----->      Array
 var x ={first:"jane", last:"doe"}; -->   Object
 var x = null; ------------------------>   null
 var x; -------------------------------> undefined
 */


// <----------3---------->
// Comment



// single line Comment =  //hello

// multiple line Comment  = /* hello
//                                 world*/


// <----------4---------->
//          Arithmetic Operators


// Operators                   Description
/*   +                               Addition
    -                               Subtraction
    *                               multiplication
    **                              Exponentiation
    /                               Division
    %                               Modulus(remainder)
    ++                              Increment
    --                              Decrement
*/

// exponentiation(**) =>

// var a = 10;
// var b = 3;

// var c = a**b;

// document.write(c);

// means = 10*10*10=1000


// increment(++)=>
// (a= a+1)

// var a =10;
// var b =3;
// a++;
// document.write(a+b);



// Decrement(--)=>
// (a= a-1)

// var a =10;
// var b =3;
// a--;
// document.write(a+b);


// <----------5---------->
//      Comparision Operators

/*Operators               Description

    ==                  Equal to 
    ===                 Equal value and Equal type
    !=                  not Equal
    !==                 Not Equal Value Or Not Equal type
    >                   greater Than
    <                   Less Than
    >=                  greater Than Or Equal To
    <=                  Less Than Or Equal To
*/


// <----------6---------->
//      "if" Statement

/* if (condition) {
    Statement  
 }  */


//  var x = 15;
//  if (x > 10) {
//     document.write("X is greater")
//  }


// <--------------7---------------->
//          Logical Operators

// Operator            Name

//  &&                 And
//  ||                 Or
//  !                  Not


//  i)  if (condition && condition) {
//             Statement  
//     }

//    (Note: Run Only When Both condition Must Be True)


//  ii)  if (condition || condition) {
//             Statement  
//  }

//  (Note: Run Only When Either on  condition Must Be True)


// iii)  if (!condition) {
//             Statement  
// }


// <-------------8-------------->
//      "if else" Statement

/* if (condition is Ture) {
    statement for Ture
}else{
    statement for false
}  */


// <--------------9------------>
//     "if else if" Statment

// if (condition) {
    
// }else if (condition) {
    
// }else{

// };


 /*       percentage
    100 to 80       marit
    80 to 60        1st
    60 to 45        2nd
    45  to 33       3rd
    less than 33    fail
    */


 /*   var per = percentage;

    if (per >= 80 && per<= 100) {
        document.write("Marit");
    }else if (per >= 60 && per <80) {
        document.write("1st");

    }else if (per >=45 && per<60) {
        document.write("2nd");
    }else if (per >= 33 && per< 45) {
        document.write("3rd");
        
    }else if (per < 33) {
        document.write("Fail");
    }else{
        document.write("Please Enter valid Percentage");
    }
    */


    // <------------10--------------->
            //Conditional Ternary Operator
    
    // (condition)?TrueSatement:falseSatement

    // <-------------11---------------->
    //         switch Statement

    //  switch (expression) {
    //     case condition1:
    //         Statement(s)
    //         break;

    //     case condition2:
    //          Statement(s)
    //         break;

    //     case condition3:
    //         Statement(s)
    //         break;
    
    //     default:
    //         Statement(s)
    //         break;
    // }


 /*   var day = 6;

    switch (day) {
        case 0:
            document.write("Monday")
            break;
        case 1:
            document.write("Tuesday")
            break;
        case 2:
            document.write("Wednesday")
            break;
        case 3:
             document.write("Thursday")
            break;
    
        case 4:
             document.write("Friday")
             break;
    
        case 5:
            document.write("Saturday")
             break;
    
        case 6:
            document.write("Sunday")
            break;
                    
    
        default:
            document.write("Enter Valid Day")
            break;
    }
    */

    // <--------------12--------------->
    //         alert box

  //  alert('hello');


    // <--------------13--------------->
    //         confirm box
    
 //   confirm('do you like our website?');

/*
 var a = confirm("do you like our website?");

 if (a) {
    alert("thanks");
 }else{
    alert("sorry");
 };
 */

   // <--------------14--------------->
    //         prompt box
    
  // prompt('What is your age?');


//    var a = prompt("What is your age?");

//    alert(a);

//     or

//     document.write(a);



   // <--------------15--------------->
           // function

//  function name(params) {
//         statement
//  }

//  calling function = function functionName();



   // <--------------16--------------->
   //     function parameter



//    function functionName(parameter1,parameter2) {
//      Statemnet
//    }

//    calling a function = functionName(argument1,argument2);




// function hello(fname,lname){
//     document.write("hello"+" "+ fname +" "+ lname);
// }

// function call= hello("ritesh","sharma");





   // <--------------17--------------->
            // function return



// function functionName(parameter1,parameter2){
//     statements

//     return  value

// }
// var a= functionName(argument1,argument2);



// function sum(math,eng,sci){
//     var s = math+eng+sci;

//     return s;
// }

// var total = sum(55,66,47);
// document.write(total);





   // <--------------18--------------->
       // global & local variables


// var a = 10;  <------ global variable

// function functionName(){

//     var b = 25;  <-------- local variable
// };



   // <--------------19--------------->

            // Basic Events 
        // -------------------

    // .click              .Double click
    // .Right click        .mouse hover
    // .mouse out          .mouse down
    // .mouse up           .key press
    // .load               .key up
    // .unload             .Resize
    // .scroll


//  =========call Event===============

        // .click(onclick);
        // .Double click(ondblclick);
        // .Right click(oncontextmenu);
        // .mouse hover(onmouseenter);
        // .mouse out(onmouseout);
        // .mouse down(onmousedown);
        // .mouse up(onmouseup);
        // .key press(onkeypress);
        // .key up(onkeyup);
        // .load(onload);
        // .unload(onunload);
        // .Resize(onresize);
        // .scroll(onscroll);

   // <--------------20--------------->
          // type of loops 


    //    .while loop
    //    .do/ while loop
    //    .for loop
    //    .for/ in loop    (Object)
    //    .forEach         (Array)

                                        // a = a+1 => a++; increment
                                        // a = a-1 => a--; decriment



        // 1)  while loop  
        
// var a = 1;

//  while (a <= 10) {
//     document.write("ritesh" + "<br>");
//      a = a+1;
//     //   or a++;
//  }



        // 2) do while  

//  var a = 1;

//     do{
//         document.write("Ritesh" + "<br>");
//         a = a+1;
//     }while(a <= 10);


      // 3) for loop

    // for(var a=1; a<=10; a++){
    //     document.write('Ritesh'+" "+"Sharma"+"<br>")
    // }





// Example == Even & odd Number with loops 

//   Even =  
        // for(var a=1; a<=100; a++){
        //         if(a % 2==0){
        //             document.write(a +"<br>");
        //         };
        //     }


// odd =  
                // for(var a=1; a<=100; a++){
                //     if(a%2!==0){
                //         document.write(a + "<br>")
                //     }
                // }



   // <--------------21--------------->

        //   Nested loop =   another loop inside a loop
     
        // Example

    //    1)  for(var a=1; a<=5; a++){
    //         for(var b=1; b<=a; b++){
    //             document.write(b);
    //         }
    //         document.write("<br>");
            
    //      };

    // 2) for(var a=1; a<=5; a++){
    //            for(var b=1; b<=a; b++){
    //               document.write(a + " ");
    //            }
    //            document.write("<br>");
                
    //       };

        // 3)  for(var a=5; a>=1; a--){
        //         for(var b=1; b<=a; b++){
        //         document.write(a + " ");
        //         }
        //         document.write("<br>");
                
        // };

    //   4)
    //     for(var a=5; a>=1; a--){
    //         for(var b=a; b>=1; b--){
    //            document.write(b);
    //         }
    //         document.write("<br>");
             
    //    };


   // <--------------22--------------->

                // Array=1

        // var a = [10,20,30];

        // var a = [1,2,3];<-------Array


// Example 

                // var ary = [10,20,30,40,50];

                // for(var a=0; a<=4; a++){
                //     document.write(ary[a]+"<br>")
                // }



            // Array=2


        
    //  .var a = newArray(10,20,30,40);

    //  .var a = newArray();

    //  a[0] = 10;
    //  a[1] = "name";
    //  a[2] = true;
    //  a[3] = null;


        // Multidimensional Array

//     var ary = [
//         ["harry",18,"male","b.com"],
//         ["sunny",19,"male","bca"],
//         ["sarah",18,"female","bca"],
//         ["tom",17,"male","ba"]
//     ];


// for(var a=0;a<4;a++){
//     for(var b = 0; b<4; b++){
//         document.write(ary[a][b]+ " ")
//     }
//     document.write("<br>")
// }




//  Add and remove Array Value 



//             var a = ["ritesh",18,"male","bcom"]

//  Add:-           a[0]="sunny";

//             document.write(a);

// Remove:-         delete a[1];

//             document.write(a);




            // Array Methods: 

// .sort()                         .entries()
// .reverse()                      .every()
// .pop()                          .filter()
// .push()                         .find()
// .shift()                        .findindex()
// .unshift()                      .includes()
// .concat()                       .some()
// .join()                         .forEach()
// .sline()                        .toString()
// .spline()                       .valueof()
// isArray()                       .fill()
// .indexof()                      .lastindexof()




//  .sort() =>            (alphabetical order)

//  var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];
// document.write(a + "<br><br>");

// a.sort();
// document.write(a+"<br>");




// .reverse()  =>      (It prints the array upside down)

//  var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];
// document.write(a + "<br>");

// a.reverse();
// document.write(a)



// .pop() =>                (This deletes the value of the last array)

//   var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// document.write(a + "<br>");

// a.pop();
// document.write(a);





// .push() =>       (This adds the value to the array)

// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// document.write(a + "<br>");

// a.push("sneha");

// document.write(a);



// .shift()  =>        (It deletes the last value of the array)

// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// document.write(a + "<br>");

// a.shift();

// document.write(a);




// .unshift() =>   (this is add First value in Array)

// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// document.write(a + "<br>");

// a.unshift("www");

// document.write(a);




// .concat() =>   (Marge Array)

// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

//  var b  = a.concat("hello", "hii");

//  document.write(b)



// .join()  =>  (Symbol Join)


// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// var b = a.join("-","_","+","$","%")  <=> (any one Symbol use)

// document.write(b)



// .sline() => (start,End);

// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// var b = a.slice(1) or (1,4);

// document.write(b)



// .spline()  =>  spline(index, howmany delete, "new value")

//  var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

//  a.splice(0,1,"neha", "karan");

//  document.write(a);



// .isArray() 

//  var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

//  document.write(a)

//  var b = Array.isArray(a);


// console.log(b)


// .indexof() => (check only) => indexof("search Item", Start)

//  var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

//  document.write(a)

//   var b = a.indexOf("ritesh" ,2 )

//   console.log(b)


// .lastindexof() = > (it search value in last)

// .lastindexof("search Item", Start);



// .includes();

// (this is Search One Value In Array And Given Boolean)




// .some();
//   (check if Any Element is an Array pass a  test)


//  var ages = [10,19, 15, 2];

//  document.write(ages + "<br>")

//  var b =  ages.some(functionName);

//  document.write(b+ "<br>")

//  function functionName(ages){
//     return ages >= 18;
//  }

//  (this Array function clear any one test pass than , it is true)


// .every();  (this Array  function clear All test pass then, it is true)


// .find(functionname);

// (find() method return the value of the first Element in an Array than pass a test)


// .findindex(functionName);


// (findindex() method return the index of the first Element in an Array That pass a test)


// .filter(functionname);

// (filter() method creates an Array filled with all Array Elements that pass a text)

// var ages =  [50,12, 19, 20];

// document.write(ages + "<br><br>")

// var b = ages.filter(functionName);

// document.write(b)

// function functionName(age){
//     return age > 18;
// }

// (this is return new Array);


// .String(); 
//     toString();  =>  (the toString() method convert an Array into a String and return the result);


// var a = ["sanjay","aman","rehman","ritesh","big B","sonu","nitesh","rahul"];

// document.write(typeof a + "<br>");

// var b = a.toString();

// document.write(typeof b);



// .valueof();
// (this valueof() method return the Array)


// .fill();

// (the fill() method fills all Element in an Array with a static value)

// var a = ["aman", "ram", "rahul"];

// document.write(a + "<br><br>")

// var b = a.fill("ritesh");

// document.write(b)


// forEach();

// a.forEach();

// a.forEach(function(){
//     statement
// })


// var a = ["Rahul", "Karan", "Aman", "Sneha"];

// a.forEach(function(value){
//     document.write(value + "<br>")
// })



// <------------------ 23 ---------------------->

            // Object

    // var a = {
    //     firstName : "Ritesh",
    //     lastName : "kumar",
    //     age : 18,
    //     country : "India"
    // };

    // document.write(a + "<br>");
    // document.write(a.firstName + "<br>");
    // document.write(a.lastName + "<br>");
    // document.write(a.age + "<br>");
    // document.write(a.country);


            // Array In Object

    // var a = { 
    //     favmovie : ["dhoom", "Sholay", "war"]
    // };

    // document.write(a.favmovie + "<br>");
    // document.write(a.favmovie[0] + "<br>");
    // document.write(a.favmovie[1] + "<br>");
    // document.write(a.favmovie[2]);


                // function In Object

    // var a = {
    //     salary : function(){
    //         return 25000;
    //     }
    // };
    // document.write(a.salary());




            // this property in Object

// var a = {
//     fname : "ritesh",
//     lname : "kumar",
//     fullname : function(){
//         return this.fname + " " + this.lname;
//     }
// };
// document.write(a + "<br>");
// document.write(a.fname + "<br>");
// document.write(a.lname + "<br>");
// document.write(a.fullname + "<br>");


                    // Object in side Object

// var a = {
//     fname : "ritesh",
//     lname : "kumar",
//     lving : {
//         'city' : 'chandigarh',
//         'country' : 'India'
//     }
// };
 
// document.write(a.lving.city + "<br>");
// document.write(a.lving.country);



                             // Object : Method = 2
    
    // var a = new Object();

    // a.firstname = "ritesh";
    // a.lastname = "kumar";

    // document.write(a.firstname + "<br>")
    // document.write(a.lastname)


        // Array Of Object

// var a = [
//     {name :"ritesh", age : 21},
//     {name :"sonkshi", age : 9},
//     {name :"nitesh", age : 21}
// ];

// document.write([a].name + " " +[a].age)


                    // const variable with Array and Object

// a)
    // const a = [10,20,30];
    // a[1] = 25;

    // console.log(a);

// b)
// const a ={
//     name : "ram",
//     age : 25
// };
// a.name = "ritesh";

// console.log(a)



        // <------------------------24------------------------>

                        // for/ in loop

                        // for(var i in a){
                        //     statement
                        // };

    // var a = {
    //     firstName : "ram",
    //     lastName : "kumar",
    //     age : 18,
    //     country : "India"
    // };


    // for(var i in a){
    //     document.write(a[i] + "<br>");
    // }




    // <-----------------25-------------------->

               // Array - Map()

    // a.map(function(){
    //     statement
    // });


// var ary = [1,2, 3, 4, 5];

//  var b = ary.map(test);
//  document.write(b);

//  function test(x){
//     return x* 10;
//  }


// <--------------26--------------->

        // String Method 

// .length             .concat();
// .tolowercase()      .split();
// .touppercase()      .repeat();
// .includes()         .slice();
// .startswith()      .substar();
// .endsWith()            .substring();
// .search()              .tostring();
// .match()               .value();
// .indexof()             .lastindexof();
// .replace()             .trim();
// .charAt()              .charcodeAt();
// .fromCharCode()


// .length     =      hight of String;
// .tolowercase =     String ko small letter me krna;
// .touppercase  =     all letter capital from;
// .includes       =    search String value and return Boolean;
// .startswith     =    only Search First value and return Boolean;
// .endsWith       =    only search end value and return Boolean;
// .search        =     search String value and return index value;
// .match          =      a.match(/is/g) g means globle;           and return Array from;
// .indexof        =       search first value in index;
// .lastindexof    =       search last value in index;
// .replace        =       a.replace("_","_"); 
// .trim               =       remove Space;
// .charAt             =       put index value and return value of index;
// .charcodeAt         =       put index value and return charcode;
// .fromCharCode       =       String.fromCharCode(1 to 120) <-- chartercode;
// .concat             =       marge String;

// var a = "hello";
// var b = "ritesh";
// var c = a.concat(" " +b);
// document.write(c);


// .split  =           remove carector;

// var a = "javascript is a great language";
// var b = a.split("a");

//  document.write(b)


// .repeat   =  repeat String value;

// a.repeat()<-------- perameter,  how many time repeat  put Number;

// .slice  =  a.slice(perameter)   excect Array slice 


// .substr();     =            substr(start, end);\

// var a = "javascript is a great language";

// var b = a.substr(2, 5);  or  (2)

// document.write(b)



// .substring          =       substring(only start, and end);


// toString =  convert value in String;

// valueof() =     String value print;

// <----------------------27----------------------->

            //   method

// .Number();
// .parselnt();
// .parseFloat();
// .isFinite();
// .isInteger();
// .toFixed();
// .toPrecision();




//1) .Number() => create string or boolean value in number;

// var a = "99";
// var b = Number(a);

// document.write(a + " " + "and type of"+ " " + typeof a + "<br>");
// document.write(b + " " + "and type of"+ " " + typeof b);



//2) .parseInt() =>  without decimal value sent;

// var a = "10.00";
// var b = parseInt(a);

// document.write(a + "<br>");
// document.write(b);


// 3) .parseFloat()  => return value in decimal;

// var a = "10.33";

// var b = parseFloat(a);

// document.write(b);


// 4) .isFinite()  =>  this function check value then given value is Finite  or Not And return Boolean;   Number.isFinite()

// var a = "10.3";

// var b = Number.isFinite(a);
//  document.write(a + " " + "and type of"+ " " + typeof a + "<br>");
//  document.write(b + " " + "and type of"+ " " + typeof b);

// console.log(b);


// 5)   .isInteger() => this function check value the given value is integer Or not;                     Number.isInteger;

// var a = "10.3";

// var b = Number.isInteger(a);
//  document.write(a + " " + "and type of"+ " " + typeof a + "<br>");
//  document.write(b + " " + "and type of"+ " " + typeof b);

// console.log(b);




// 6) .toFixed(x)       =>   addEventListener.tofixed(x)

// var a = 5.56789;
// var b = a.toFixed(2);

// document.write(b);


// 7) .toPrecision(x) =>

// var a = 5.56789;
// var b = a.toPrecision(3);

// document.write(b)


// <-----------------------------28----------------------->

            // Math Methods

    // .ceil(x);            .sqrt(x);
    // .floor(x);           .cbrt(x);
    // .round(x);           .pow(x,y);
    // .trunc(x);           .random();
    // .max(x,y,z...n)      .abs(x);
    // .min(x,y,z...n)      .pl




// .ceil(x)       =        Math.ceil(x) (always decimal value)       =   this function return upper value in X 

// var a = Math.ceil(2.4);


// document.write(a)




// .floor(x)         =         Math.floor(x) (always decimal value)      =    This function return downword   value in X 

// var a = Math.floor(2.4);


// document.write(a)



// .round(x)           =       Math.round(x)   (always decimal value)    

// ====> if value is 0.5  upper or downword then, it return upper on down value


// var a = Math.round(2.4);
            // or
// var a = Math.round(2.6);


// document.write(a)



// .trunc(x)       <---  always  return integer value 


// var a = Math.trunc(3.95);


// document.write(a);


// .max(x,y,z...n);      <====>  Multipal Number put and return maximum value  

// var a = Math.max(15,29,35,4);

// document.write(a);




// .min(x,y,z...n);      <====>  Multipal Number put and return minimum value  

// var a = Math.min(15,29,35,4);

// document.write(a);



// .sqrt(x)  => square Root    =   Math.sqrt(x)       =>   it found square Root

// var a = 25;

// var b = Math.sqrt(a);

// document.write(a+ " " +"value"  + "<br>")
// document.write(b+ " " +"square Root")




// .cbrt(x)      = find cubic root   


// var a = 125;

// var b = Math.cbrt(a);

// document.write(a + " " +"value" + "<br>");
// document.write(b + " " +"cubic Root");


// .pow(x,y)   

// a = Math.pow(3,2);

// document.write(a);



// .random()   =   the return random  value in 0 to 1;


// var  a=  Math.floor(Math.random() * 10) +1;

// document.write(a);

// they return random value in 1 to 10;



// .abs <----absulute value  <===>  the return absulute value <=======>     Math.abs()


// var a = Math.abs(2.25);

// document.write(a)


// PI  <====>  22/7  <====>  3.1415926389793;

// var a = Math.PI;

// document.write(a);





// <-------------------29---------------------->

                // Date Methods  


// .toDatestring();        .setDate();
// .getDate();             .setFullyear();
// .getFullyear();         .setHours();
// .getMonth();            .setMilliseconds();
// getDay();               .setMinutes();
// .getHours();            .setMonth();
// .getMinutes();          .setSeconds();
// .getSeconds();
// .getMilliseconds();

                // =======get Methods========

// var now = new Date();

// document.write(now);      

// week Month Date year time GMT+0530 (India Standard Time)



//1) .toDatestring();

// const a = new Date();

// document.write(a.toDateString());


// 2) .getDate();

// const a = new Date();

// document.write(a.getDate());


// 3) .getHours();

// const a = new Date();

// document.write(a.getHours());


// 4)   .getMinutes();

// const a = new Date();

// document.write(a.getMinutes());


// 5)    .getMilliseconds();

// const a = new Date();

// document.write(a.getMilliseconds());


// 6)  .getSeconds();

// const a = new Date();

// document.write(a.getSeconds());


                // =======set Methods========


// 1)   .setDate();

// var a = new Date();

// a.setDate(10)

// document.write(a);


// 2)   .setFullYear();

// var a = new Date();

// a.setFullYear(200);

// document.write(a);


// 3)    .setHours();

// var a = new Date();

// a.setHours(19);

// document.write(a)


// 4) setMilliseconds();

// var a = new Date();

// a.setMilliseconds(22)

// document.write(a)


// 5)  .setMinutes();

// var a = new Date();

// a.setMinutes(5);

// document.write(a)


// 6)  .setMonth();

// var a = new Date();

// a.setMonth(1)

// document.write(a)


// 7)  .setSeconds();

// var a = new Date();

// a.setSeconds(1)

// document.write(a);


// <------------------------30------------------------->

        // ====How to target DOM Object====

//  .ID  ------>  document.getElementById('id');

// .Class    ----->    document.getElementsByClassName('className');

// .Tag      ----->        document.getElementsByTagName('TagName');


    // =====Other DOM Targeting Methods=====

        // .document;
        // .document.all;
        // .document.documentElement;
        // .document.head;
        // .document.title;
        // .document.body;
        // .document.images;
        // .document.anchors;
        // .document.links;
        // .document.forms;
        // .document.doctype;
        // .document.URL;
        // .document.baseURI;
        // .document.domain;


        // =====What we can get with DOM?======
    
// .html           .text           .attribute


// *DOM get Method==============> 

    // .innerText;
    // .innerHTML;
    // .getAttribute;
    // .getAttributeNode;
    // .attribute;

// *DOM Set Mathods==========>

    // .innerText;
    // .innerHTML;
    // .setAttribute;
    // .removeattribute;
    // .attribute;




// <===New DOM  Targeting Methods====>


// .querySelector  =>  document.querySelector(css selector);
// .querySelectorAll   =>  document.querySelectorAll(css selector);


// <===========DOM css Styling Methods================>


// .Style          .className          .ClassList



// <==Assign Event Using the HTML DOM  :-

// document.getElementById('id').onclick = functionName;




// <========DOM addEventListener() Method  :-=============>


// 1)
// document.getElementById(id).addEventListener('click',functionName);

// 2)
// document.getElementById(id).addEventListener('click',function(){
//     statment;
// });


// <========DOM removeEventListener() Method  :-=============>

// document.removeEventListener('click',functionName);





// <--==--classlist Method--==-->

// .add(class1,class2...);
// .remove(class1,class2...);
// .toggle(class);
// .contains(class);
// .Item(index);
// .length;


// <=======DOM Traversal Methods========>

// .parentNode
// .parentElement
// .children
// .childNode
// .firstchild
// .firstElementchild
// .lastchild
// .lastElementchild
// .nextElementSibling
// .nextsibling
// .previousElementsibling
// .previoussibling


                                        // DOM Traversal
                                    
                                        // [A] <---perent Element
                                            // /
                        // --------------------------------------------
                        // [B]         [C]      [D]        [E]         [F]
                     //    first       previous            next        last
                     //    child       sibling             sibling     child 


                // (.function containing Element will simply target the Element it self)


            
            
                // <==========DOM Create Methods===========>

// .createElement()    ->  tag ->           <p></p>
// .createTextNode()      ->   Text   ->     this is just Text;
// .createComment()        ->  Comment ->       <!--Comment-->
      


        // <========DOM append Methods=========>

// .appendchild     =>         appendchild()

// var newelement  =   document.createElement('h1');

// var newText     =   document.createTextNode("this is just text");

// newelement.appendChild(newText);

// console.log(newelement);




// .insertBefore()


// var newelement  = document.createElement('h1');

// var newText =   document.createTextNode('This Is Just Text');

// newelement.appendChild(newText);

// var target  =   document.getElementById('text');

// target.insertBefore(newelement,target.childNodes[0]);



// <======DOM Append Methods=======>


// ----Only append------>

    // .appendchild
    // .insertBefore


// ---create & append---->

    // .insertAdjacentElement
    // .insertAdjacentHTML
    // .insertAdjacentText




    // <=====DOM insertAdjacent position=====>

        // .beforebegin                    ----------------
        // .afterbegin                     -              -
        //                                 -              -
        //                                 -              -
        //  .beforeend                     -              -
        // .afterend                       ----------------

// var.insertAdjacentElement(beforebegin(position),newElement)




// <=========DOM replace & remove Methods======>

// .replacechild()
// .removechild()

// replacechild(newElement,OldElement);

        // .contains(true or false)
        // .cloneNode(true,false)




//  (this is copy any elements or Attribute)



// <--------------------31--------------------->
        // JavaScript form Event   

// .keydown 
// .keypress
// .keyup
// .focus()
// .blur()
// .input
// .change
// .select
// .submit
// .invalid


// function focusFunction(element){

//     element.style.background="red";
// }
// function blurFunction(element){

//     element.style.background="";
// }
 
 

// <------------------32------------------------->

            // javaScript Animation

// .setInterval(functionName , milliseconds(1000));


// .clearInterval();

// {This function run many times}

// var a = "hello";

// setInterval(function(){
//     console.log(a);
//     document.write('hello Ritesh' + "<br>")
// },1000)


// <-------------33----------------------------->

        // JavaScript One Time Animation

// setTimeout(functionName,milliseconds);

// setTimeout(function(){
//     document.write('hello world' + "<br>")
// },1000);



// clearTimeout()
// {this function run only one Times}



// <-----------------------------34------------------------------>

                // BOM (Browser object model)

// *window height & width methods

        // .innerHeight;
        // .innerWidth;
        // .outerHeight;
        // .outerWidth;


// console.log("inner Height" + ": " + window.innerHeight);
// console.log("inner Width" + ": " + window.innerWidth);

// console.log("outer Height" + ": " + window.outerHeight);
// console.log("outer Width" + ": " + window.outerWidth);



// *window open & close Methods


// var a = function start(){
//     window.open("https://www.youtube.com/","","width=500px ,height=500px")

// }


// *moveBy & moveTo methods

// var a;
//  function start(){
//   a =  window.open("","","width=200px ,height=200px, top=100px, left=100px")
//   a.document.write('<p>hello</P>')

// }
// function move(){
//     a.moveTo(200,200)

// }
// function mov(){
//     a.moveBy(300,200)

// }


// *window resizeBy & resizeTo  methods

// var a;
//  function start(){
//   a =  window.open("","","width=200px ,height=200px, top=100px, left=100px")
//   a.document.write('<p>hello</P>')

//  }

// function resizeto(){
//     a.resizeTo(500,500)
// }
// function resizeby(){
//     a.resizeBy(500,500)
// }


// *window scrollTo() & scrollBy() methods

// function scrollby(){
//     window.scrollBy(10,100)
// }

// function scrollto(){
//     window.scrollTo(10,100)
// }



// <---------------------------------35--------------------------------->

            // location Object properties :



                // .hash           .port
                // .host           .protocol
                // .hostname       .search
                // .href           .origin
                // .pathname



    // console.log(location.hash);
    // console.log(location.port);
    // console.log(location.host);
    // console.log(location.protocol);
    // console.log(location.hostname);
    // console.log(location.search);
    // console.log(location.href);
    // console.log(location.origin);
    // console.log(location.pathname);



    // *location object methods

// .Assign();
// .Reload();
// .Replace();


// .Addign() =>

// location.assign('https://www.google.com/')
// location.reload();
// location.replace('https://www.google.com/');



// *History Object Methods

        // .back();
        // .forward();
        // .go();   


// history.back();

// history.forward();

// history.go(1 or -1);

