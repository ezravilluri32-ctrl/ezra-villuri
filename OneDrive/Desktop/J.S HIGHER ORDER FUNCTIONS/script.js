//function add(num1, num2) {
//    return num1 + num2;
//}
//
//let result = add(420, 580);
//
//console.log(result);


// HIGHER ORDER FUNCTION : ANY FUNCTION THAT TAKES ANOTHER FUNCTION AS AN ARGUMENT OR RETURNS A FUNCTION IS CALLED HIGHER ORDER FUNCTION.

//function add(num1,num2,func1){
//    let result = num1 + num2;
//    return func1(result);
//}

//function displayresult(result){
//    console.log(result);
//}

//add(46,54,displayresult);


//function add(num1,num2){
//    let result = num1 + num2;
//    return displayresult(result);
//}

//function displayresult(result){
//    console.log(result);
//}
//add(7732,4874);

//const greet = function (){
    //console.log("Hello, Ezra!");
//}
 //greet();
 //const arr1 = [greet];

 //console.log(arr1[0]());

//const obj = {
//    func:greet,
//};

//console.log(obj.func());

//function greet(){
//    return "ezra villuri";
//}
//console.log(greet());


// advanced javascript concepts this  keywords 

//const person = {
//    username:"ezravilluri",
//    greet:function(){
//        console.log("Hello, " + this.username);
//    }
//}

//console.log(person.username);
// person.greet();

//console.log(this);

//function func(){
//    console.log(this);  
//}

//func();

//const func2 = function(){
//    console.log(this);
//} ;

//func2();

//const arrow = () => {
//    console.log(this);
//};

// arrow();

 // arrow functions doesn't have their own  this keyword .

//const person = {
//    username:"obito uchiha",
//    greet:function(){
//        const inner = ()=>{
//            console.log(this.username);
//        };
//        inner();

   
//    }
//}
// person.greet();

   //     advanced java script :add , apply , bind 
//const demonslayer = {
//    hero:"tanjiro kamado",
//    director:"haruo sotozaki"
//
//}
//
//function animeinfo(year, producer) {
//    console.log(`demonslayer was directed by ${this.director} starring ${this.hero}.this was released in ${year} and was a huge hit.produced by ${producer}`);
//}
//
//animeinfo.apply(demonslayer,[ 2019, "ufotable"]);
//
//const demonslayerinfo=animeinfo.bind(demonslayer, 2019,"ufotable");
//
//demonslayerinfo();

// ---------------------------------------------------------------
// HIGHER ORDER FUNCTION DEMO
// A higher order function either:
//   1. takes another function as an argument, or
//   2. returns a function.
// ---------------------------------------------------------------

// 1. The higher order function.
//    It produces the data and hands it to the callback it was given.
//function withName(callback) {
//    const userName = "Ezra Villuri";
//    return callback(userName); // pass the value INTO the callback
//}

//// 2. The callback. A plain function that accepts the data it is given.
//function greet(userName) {
//    const message = `Hello, ${userName}!`;
//    console.log(message);
//    return message; // returning makes it testable and reusable
//}

// 3. Wire them together: pass `greet` itself (no parentheses!).
//withName(greet);





//function name (callback){ //func is a call back function
//    let name = "obito uchiha"; //just to store a variable
//callback(name);
//}

//function greet (name){
//    console.log(name);

//}

//name(greet);

//function anime(callback){
//    let anime= "demon slayer";
//    callback(anime);

//}

//function greet (anime){
//    console.log(anime);
//}

//anime(greet);

//function movie(callback){
//    let movie = "bahubali";
//callback(movie)
//}

//function greet(movie){
//    console.log(movie);
//}

//movie(greet);

 //   adavnced java script settimeout & set interval 

//function one(){
//    console.log("one")
//}
//
//function two(){
//    console.log("two")
//}

 //  two();
//one();


// set timeout  : it runs in the particular delay given by the  user in milliseconds
//let message ="hi obito";
//
//setTimeout(() => {
//  console.log(`this runs after 2 seconds.${message}`);  
//},2000,message );

  
 // set interval : it runs for every given time  constinuously


// let count = 1;
// let setintervalId =setInterval(() => {
//  console.log("This runs after every 2seconds");
 
//if(count>5){
//  clearInterval(setintervalId)
//}

//},2000);


//     advanced java script array methods : Map(),filter(),reduce(),some(),every();
          // 1st topic of the day

//const numsArr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;//55
//for( let i = 0 ; i<numsArr.length;i++){
// sum = numsArr[i]+sum;
//
//
//}
 //console.log(sum);
//numsArr.forEach((item) => {
//  console.log(`${index} :${item}`);
//});

//const multiply=numsArr.map((item) =>{
// return item*2;
//});

//console.log(numsArr)
//console.log(multiply);

//const evenNums = numsArr.filter((item) => {
//return item % 2 === 0;

//});

//console.log(numsArr);

//console.log(evenNums);


//const sum = numsArr.reduce((acc,item) => {
//return acc+item; //55+20
//},20);
//
//console.log(sum);

//const result=numsArr.some((item)=>{
//return item >= 5;
//});
//
//console.log(result);


//const result=numsArr.every((items)=>{
//return items >=5 ;
//})

//console.log(result);
 
 //advanced java script destructuring Array,objects    2nd topic of the day

//const cars =["BMW","BUGGATI","PORSCHE","PAGANI"];



///let car1 = cars[0];
///let car2 = cars[1];
///let car3 = cars[2];
///let car4 = cars[3];

//let[car1,car2,car3,car4]= cars; // array destructuring


//console.log(car1);
//console.log(car2);
//console.log(car3);
//console.log(car4);

//const person ={
//    name:"obtio",
//    age:999 ,
//    
//};

//console.log(person.name);
//console.log(person.age);

//let {
//    name,
//    age,
//    otherdetails : {city,phone}              
//  }  = person;


//console.log(name);
//console.log(age);
//console.log(city);
//console.log(phone);

//function userdetails({name,age}){
//    console.log(`Hi this is  ${name} and i am ${age}years old.`);
//}
//
//userdetails(person);

//===============================================================================================
// spread operator & rest  parameter   3rd topic of the day 

//const arr1 =[2891181,29825,5300,1400,500];
//const arr2 =["ezra villuri","daniel villuri"];
//console.log(...arr);

//console.log(Math.max(...arr));

//const arr3 =arr1.concat(arr2);
//console.log(arr3);

//const arr4 =[...arr1,arr2];
//console.log(arr4);
//
//const person = {
//    name:"villuri ezra",
//    age:21,
//    city:"vishkapatnam",
//    state:"andhrapradesh"
//}
//console.log(person);
//
//const newperson ={...person,mobile:"756909287"};
//
//console.log(person);
//console.log(newperson);

//========================================================================================================================================
//       REST  PARAMETER

//const arr =[1,2,3,4,5,"villuri ezra"]

//const [first,second,third,...remaining] = arr;

//console.log(first);
//console.log(second);
//console.log(third);
//console.log(...remaining);

//const person = {
//name:"villuri ezra",
//age:21,
//city:"visahkapatnam",
//phone:"7569092867",
//};
//
//const newobj ={
//    state:"andhra pradesh",
//    district:"anakapalli",
//    mandal:"K.kotapadu",
//};

//console.log(person);

//const {name,age, ...details} =person;
//console.log(name);
//console.log(age);
//console.log(details);

// const combinedobj={...person,...newobj, test: "test"};
// console.log(combinedobj);

//const name = "VILLURI EZRA";    // spread 
//console.log(...name);


const arr =[1,2,3,4,5];

console.log(arr);
console.log(...arr);

const[one,two,...remaining] =arr

console.log(one);
console.log(two);
console.log(remaining);


































