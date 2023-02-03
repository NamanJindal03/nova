// var person ={
//     name2 : 'person2',
//     ask: function(){
//         console.log(this, this.name2) //?person object person2
//         function x(){
//             console.log(this,this.name2) //?
//         }
//         x(); //window.x()
//     }
//     //this undefined, this.name2 = person2
// }
// const temp = person.ask();
// // temp(); //window.temp()
// //it does not matter wherer the funciton is located in the code, what matters is how that funciton is being called

// // person.ask()();

// // 4 rules this -> 
// //default binding -> window
// //implcit binding -> person
// //explicit binding  -> call, apply, bind
// //new keyword -> 

// /* 

//     bind and call?

//     bind basically returns a new funciton in which thhe this keyword is already forever binded. the 
//     funciton is not executed
//     whereas
//     call we call that function with the this we are passing 
// */

// /* 


// // */
// // function normal(){
// //     return undefined;
// // }


// // //cosntructor 
// // function sample (){
// //     //it creates a blank object 
// //     //this starts pointing to that newly created blank object
// //     this.name = 'naman';
// //     //it returns the newly created object
// //     //return this

// // }

// // const sampleHold = new sample();
// // console.log(sampleHold) //output?

// function ask(){
//     console.log(this, this.name2)
// }
// var person ={
//     name2 : 'person2'
// }

// ask.call(person)
// ask()
// const instance = ask.bind(person)
// instance();

/* 
TODO: whosoever starts joining the session please attemp the question that I am sharing. 
Please apply all the concept that we studied yesterday. 
I am coming in 5 mins
*/

// quetion 1
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//         //this -> 
//         // console.log(this.message) //?
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
//   };
//   console.log(object.getMessage()); // What is logged?  || Hello, Earth  ||

  //question 2

//   constructor function
  function Pet(name) {
    //{}
    //over here we had a value of this
    //{name: 'Fluffy', getName: function def}
    this.name = name;
    this.getName = () => this.name; //fluffy
  }
  
//   new Pet('some')

  const cat = new Pet('Fluffy');
  //
  console.log(cat.getName()); // What is logged? || fluffy //2nd rule 
  const { getName } = cat; //object destructing
  console.log(getName());     // What is logged? //1st -> default binding 
// 


// //   const cat2 = new Pet('somethign')
//   console.log(cat)
//   /* 
//     cat = {
//         name : 'Fluffy';
//         getName : function() {return this.name};
//     }

//   */

//   //implicit binding 
//   //who all knows what object descturing is??? ES6 -> vvvv imp
// //   console.log(getName)
  //window ''

// function something(){
//     var length2 = 4;
// }
// var length2 = 1000;

//   function callback(){
//     //tjhis -> window
//     console.log(this.length2); //? 
//   }

//   const object = {
//     length2: 5,
//     method(callback){
//         //
//         // console.log(moreValues)
//         callback(); //window
//     }
//   }

//   object.method(callback, 1, 2)
//window

// const obj = {
//     name: 'naman',
//     sayHello:  ()=> {
//         //this -> window 
//         //binded itself to obj as this 
//         console.log(this, this.name); //window, ''

//         var sayBye = function (){ //normal 
//             //window -> this
//             console.log('bye', this) //window

//             var sayBye2 = () => {
//                 console.log('bye2', this) //window
//             }
//             sayBye2()
//         }
//         sayBye();  //window.sayBye()
//     }
// }
// obj.sayHello()


// const obj = {
//     name: 'naman',
//     sayHello:   ()=> {
//         //binded itself to obj as this 
//         console.log(this, this.name); //window
//         var sayBye = () =>{

//             console.log('bye', this) //window
//         }
//         sayBye(); 
//     }
// }
// obj.sayHello()


// const fatArrow = () => {
//     console.log(this, this.name2)
// }

// function normalFunc (){
//     console.log(this, this.name2)
// }

// const people = {
//     name2: 'naman'
// }

// fatArrow.call(people)
// normalFunc.call(people)

// //explicit -> call apply bind

// let user = {
//     firstName: 'naman',
//     lastName: 'jindal',
//     age: 10,
//     courseList: [],
//     buyCourse: function (courseName) {
//         //this window.courseList => undefined.push() //error
//         this.courseList.push(courseName)
//     },
//     getCourse: function(){
//         console.log(this.courseList) //blank array
//     }
//     // not defined => undefined 
//     // null 
//     //
// }
// user.buyCourse('rect'); //error
// user.getCourse(); //

// const obj = {

// }
// console.log(obj.random)

// var name2; //doesnt have any sort of value
// function sampleDec () {
//     console.log(name2)
// }
// sampleDec()



