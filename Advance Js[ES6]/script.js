// <-----------Template string Or template literals-------------->

// // normal =>

// var a = "hello";
// var b = a+ " " + "world";
// document.write(b);

// // Advance =>

// var a = 'hello';
// var b = ` <br> ${a} world`;

// document.write(b);




// <---------------Arrow function------------------>

    //        () => { };



// <-----------Rest Operator---------------->

// function ABC(name, ...arr){

// };


//  example 1)

    // function sum(name, ...argu){
    //     console.log(arguments);

    //     document.write(`hello ${name} : `)

    //     let sum = 0;
    //     for(let i in argu){
    //         sum += argu[i];
    //     }
    //     document.write(sum + "<br>")
    // }
    // sum("ritesh",10,20,40)



// <-----------Spread Operator---------------->

// Example 1)


// var arr = [20,30,40];  
// function sum(name, ...arga){

//     console.log(arguments);

//     document.write(`Hello ${name} : `);

//     let sum = 0;
//     for(let i in arga){
//         sum += arga[i];
//     }
//     document.write(sum)
// }

// sum("ritseh", ...arr)


// Example 2)

// var arr = [10,20,30,40];


// console.log(arr)
// console.log(...arr)


// Example 3)

// var arr1 = [10,20,30,40];

// var arr2 = [...arr1];
// arr1.push(50)

// console.log(arr1)
// console.log(arr2)


// Example 4) 


//  var arr1 = [10,20,30,40];

// var arr2 = [50,60];

// // var arr3 = arr1.concat(arr2)

// // or

// var arr3 = [...arr1, ...arr2];

// console.log(arr3);

// <-----------Destructuring Array---------------->


// let user = ["Ritseh", 21, "Delhi"];

// let [name, age, city] = user;

// console.log(name);


// <-----------Destructuring object---------------->

// let user = {
//     name : "ritesh",
//     age : "21",
//     city : "delhi"
// }

// let {name, age, city} = user;

// console.log(name)
// console.log(age)
// console.log(city)


// or 

// let {name:n, age: a, city: c} = user;

// console.log(n)
// console.log(a)
// console.log(c)


// <-----------OOP introduction---------------->

// class   and         Object-----> method, property


// example 
                    // class hello{
                    //     message(){
                    //         console.log("hello everyone");
                    //     }
                    //     sorry(){
                    //         console.log("sorry everyone");
                    //     }
                    // }
                    // let a = new hello();
// calling
                    // a.message();
                    // a.sorry();


        // ====type of methods :========


// 1) constrctor  =   constrctor(){
//                             console.log('hello')
//                         }

// 2) prototype    =   message(){
//                             console.log('hello')
//                         }

// 3) static       =   static name(){
//                             console.log('hello')
//                         }

//                         [constrctor = this call automatic] 


// example1)

// class student{
//     constructor(name, age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log("constructor function")
//     }
//     hello(){
//         document.write(`hello ${this.studentname} your age is ${this.studentage}`)
//     }
//     static staticMethod(){
//         console.log('static function');
//     }
// }

// let a = new student('Ritesh', 21);

// a.hello();
// student.staticMethod();


// <---------------------Modules-------------------->

// File1.js                                        File2.js
// export let name = "Ritesh";                 import{name}from'./File1.js'

// export function hello{                      import{hello}from'./File1.js'
                                                    // console.log(name)
                                                    // hello()
// }

// export class user{                              import{user}from"./file.js";

//                                                 let a  = new user();

// }


// HTML File =  <script type = "module" src="./file2.js"></script>



// import{message, user,  test} from "./main.js";

// console.log(message);

// user("Ritesh");

// let  a = new test();

// document.body.innerHTML = message;



// <-----------------Promise------------------>

//           Promise();
//             /
//    --------------------
//    /                    /
//    resolve()           reject()
//    /                        /   
// then()                   catch()


// var prom = new Promise();
// var prom = new Promise(function(){
//     // some code Headers... 
// })

// var prom = new Promise(function(resolve,reject){
//     // some code here ... 
// })

// let prom = new Promise(function(resolve,reject){
//     if(condition){
//         resolve();
//     }else{
//         reject();
//     }
// });

// // calling = 
// resolve = prom.then(onfulfilment);
// reject = prom.catch(onrejection);



// example = 
// function prom(complete){
//     return new Promise(function(resolve, reject){
//         if(complete){
//             resolve("I am Successful.")
//         }else{
//             reject("I am Failed.");
//         }
//     })
// }

// console.log(prom(true))
// // console.log(prom(false))


// example 2 =

// let complete = true;
// let prom = new Promise(function(resolve, reject){
//     if(complete){
//                resolve("I am Successful.")
//            }else{
//                reject("I am Failed.");
//           }
// });

// console.log(prom)


        // ===========All Promise syntax===========

        // let p1  = new Promise(function(resolve,reject){
        //     console.log("First Promise")
        //     resolve("First")
        // });
        // let p2 = new Promise(function(resolve,reject){
        //     console.log("Second Promise");
        //     resolve("Second")
        // });
        // Promise.all([p1,p2]).then().catch();

// Example = 

// let p1 =  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('first promise');
//         resolve(10);
//     }, 1 * 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('second promise');
//         resolve(20);
//     }, 2 * 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('third promise');
//         resolve(30);
//     }, 3 * 1000);
// });

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`Results : ${result}`);
// }).catch((error)=>{
//     console.log(`Error : ${error}`)
// });


// <----------------------AJAX------------------> 


// A = asynchronous;
// J = JavaScript;
// A = And;
// X = XML;

// how ajax works ?

// 0 : Request not initialized
// 1 : server connection established
// 2 : Request received
// 3 : processing Request
// 4 : Request finished and Response is ready 


// status code 
// http status code 

// 200 : "ok"
// 403 : "for bidden"
// 404 : "not found"


// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status ==200){
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
// };
// xhttp.open("Get","Filename.txt",true);

// xhttp.send();


// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState = 4 && this.status == 200){
//             // console.log(this.responseText);
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("Get","/index.txt",true);
//     xhttp.send();
// }


// <-------------fetch() syntax-------------------->

// fetch(file/URL).then(function(Response){
//     return Response.formData;
// }).then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });


// example =


// fetch("fake json data")
// .then((response) => Response.text());
// .then((data) => document.write(data));
// .catch((error)=> document.write("can't fetch data"));

// JSON.stringify = change js code in JSON


//<================== fetch()=> insert , update , delete===============>

// fetch(File/URL,{
//     method: "POST",---------> "put" "Delete" "Get"
//     body : data, ----------> FormData/JSON data/ Text
//     Header : {
//         'content-type' : 'application/json',
//     },
// });
// application = >  'content-type' : 'application/X-www-from-urlencoded'


// <-------- Asyne & await ------------------->
                // async method 


// async function test(){
//     return "Hello"
// }
// console.log(test());

                // await method   

// async function test(){
//     console.log("A");
//     await console.log("B");
//     console.log("C")
// }
// test();
// console.log("D");
// console.log("E");


// example = 

// async function test(){
//     console.log("2 : message");
//     await console.log("3 : message");
//     console.log("4 : message");
// }
// console.log("1 : message");
// test();
// console.log("5 : message");


// <-----------------Symbol Data type --------------------> 

// var x  = Symbol();


// var x = Symbol("Hello");
// var y = Symbol("Hello");

// console.log(x === y)


// <----------iterators----------->

// let numbers = [100,200,300];
// let iter = numbers[Symbol.iterator]();

// iter.next();
// iter.next();
// console.log(iter.next());
// iter.next();

// example = 
// let numbers =  [100,200,300,400,500,600];
// let iter = numbers[Symbol.iterator]();

// let result = iter.next();

// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }

// <--------------------------Generators---------------------->


// function *text(){
//     yield "first";
//     yield "second";
//     yield "third";
// }
// let g = text();

// console.log(g.next());
// g.next();
// console.log(g.next());


// example 1) =

        // function *Generators(){
        //     yield "yield No.1";
        //     yield "yield No.2";
        // }
        // let g = Generators();
        // console.log(g.next());
        // console.log(g.next());
        // console.log(g.next());

// example 2 = 

        // function *Generators(){
        //     yield "yield No.1";
        //     yield "yield No.2";
        //     yield "yield No.3";
        // }
        // let g = Generators();
        // console.log(g.next().value);
        // g.next();
        // console.log(g.next().value);


// example 3 = 

            // function *Generators(){
            //     yield "php";
            //     yield "node";
            //     yield "angular";
            //     yield "react";
            // }
            // let g = Generators();

            // console.log(g.next().value);
            // console.log([...g]);

// <------------strict mode --------------->

// "use strict"


// <--------Error Handling---------------->

// try{
//     //try code goes here
// }catch(error){
//     //when any error comes in try code
// }


// example 1 =

//  setTimeout(function(){
//     try{
//         blabla;
//     }catch(error){
//         console.log("Error has ocurved");
//         console.log(error)
//     }
//  },1000)


// example 2 =

// try{
//     blabla;
// }catch(error){
//     console.log(error);
// }


// example 3 =

                // try{
                //     blabla;
                // }catch(error){
                //     console.log(error.name);
                //     console.log(error.message);
                //     console.log(error.stack);
                // }


// =====Deffierent type of errors in js========

// .Eval Error
// .Range Error
// .Reference Error
// .Syntax Error
// .Type Error
// .URL Error
// Argregate Error

// try{
//     let json = `{"age":30}`;
//     let user = JSON.parse(json);

//     if(!user.name){
//         throw new Error("Incomolete data : no name");
//     }
//     console.log(user.name);
//     console.log(user.age);
// }catch(error){
//     console.log(error)
// }

// try{

// }catch(){

// }finally{
//     //always run
// }


