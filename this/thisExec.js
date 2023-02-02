// // function ask(){
// //     console.log(this, this.name)
// // }
// // ask();
// /*  window*/

// /* we are running this program in the browser environment */
// /* 
//     difference between 

// */
// var person = {
//     name2: 'person2',
//     // person2: 'ab to yhi call hoga',
//     ask: function(){
//         // console.log(this) //person object
//         // console.log(this.name2) //person2
        
//         function x(){
//             console.log(this, this.name2); //
//             return 100;
//         }
//         /* the window acts as the global */
//         person.x()//window.x()
//         //100 //window.x()
//         // return x;
//         //x()
//         // x()
//         // let sample = x(); //sample ?
//         // return sample;
//         // return x();
//     }
// }
// // person.ask()(); //
// let temp = person.ask(); //implicit binding

// // console.log(temp()) //100??? //default binding // window.temp()
// // console.log(temp); //

// //implicit binding //default binding 


// // temp(); //



// // const obj = {
// //     age: 10
// // }
// // console.log(obj.age)

// /* 
//     are you running js in broser or in node?
// */
// function ask(random, ...arr){
//     // console.log(arr)
//     console.log(this, this.name2)//output?
//     // console.log(arr[0])
//     //     console.log(arr[1])

//     console.log(random) //output?
//     console.log(arr)//output?
// }

// var person = {
//     name2: 'naman',
//     ask(){
//         console.log(this, this.name2)
//     }
// }
// var car = {
//     name2:'civic',
//     ask(){
//         console.log(this, this.name2)
//     }
// }

// // person.ask();
// // car.ask();
// // ask() //window.ask()
// //default
// //implicit
// ask.call(car, 'nj', '20', '40')

// //difference between bind and call

// // const functionHolding = ask.bind(car) //does not call the funciton
// // //infact it returns function which is binded 
// // functionHolding() //already has this keyword binded to it 
// // ask()

// // ask.apply(person, ['nj', '20', ])
// /* when we are dealing with api calls  */


// function spreadExplanation(){
//     return [1,2,3,4]
// }
// const [...arr] =spreadExplanation() 
// console.log(arr)

function normalFunc (){
    return undefined;
}

/* constructor function */
function People(){
    const this = {name: '', age: ''};
    this.ask = function (){
        console.log('I am func')
    }
    // console.log(this, this.name2)
    return this;
}
const something = new People();
console.log(something.ask())

//new?? 
/* 
    4 kaam -> 
    1) a brand new empty object is created
    2) for that instance this points to that newly created objefct 
    3) it returns the this keyword automatically
*/

priority 

default binding < implicit < explicit < new