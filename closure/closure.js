// function abc(outer_num){

//     function innerabc(inner_num){
    
//         return outer_num + inner_num;
    
//     }
    
//     return innerabc;
    
// }
// abc()();

// function createStack(){
//     const items = [];
//     return{
//         push(item){
//             items.push(item)
//         },
//         pop(){
//             return items.pop()
//         },
//         view(){
//             return items;
//         }
//     }
// }
// const stack = createStack();

// console.log(stack.items);
// stack.push(10);
// stack.push(5);
// stack.pop();
// console.log(stack.view());
// stack.items = [1,5,342312]; //



// console.log(stack.items)
// stack.items;
// stack.items = [1,5,342312]; //
// stack.push(200);
// console.log(stack.items)
/* Encapsulation is getting broken here? */



/* 
    is there anything wrong with the createStack -> ?
*/

// function createStack(){
    
//     return{
//         items: [],
//         push(item){
//             if( Number(item) > 5 )
//             this.items.push(item)
//         },
//         pop(){
//             return this.items.pop()
//         },
//         viewFullStack(){
//             return this.items;
//         }
//     }
// }
// const stack = createStack();
// stack.items = ['a', 'b', 'c'] //encapsulation

// console.log(stack);
// stack.push(10);
// stack.push(5)
// stack.pop();

// function outer (){
//     let abcd = 10;
//     function inner () {
//       console.log(abcd)
//     }
//     return inner;
//   }
  
//   const innerFunc = outer();
//   innerFunc();

// function createIncrement(){
//     /* count,message  */
//     let count =0; //3

//     function increment(){
//       count++;
//       console.log(count);
//     }

    

//     function log(){
//         let message = `Count is ${count}`; //count is 0
//       console.log(message) //count is 3
//     }
//     return [increment, log]
//   }
  
//   const [increment, log] = createIncrement();
//   increment(); 
//   increment();
//   increment();
//   log(); //

// function createBase(numb){
//     //complete this funciton
// }
// function createBase(numb){
//     // return addsum(num) {
//     //     // addsum(num){    
//     //         console.log(num + numb);
//     //     // }
//     // }
//     return (n) => {
//         // console.log(numb  )
//         // return numb + n
//         console.log(numb +n)
//     }

//     // return function addSum(n){
//     //     console.log(n + numb)
//     // }
    
// }

// var addSix = createBase(6);
// addSix(10); //16
// addSix(20); //26

// function RedisStore

//You have to implement a local redis database -> 
//key value store 

//storing -> key value -> put
//get -> 
//timer -> 1000ms ->

//constructor function
function RedisStore(){
    let redisStore = {};
    this.put = function(key, value, ttl = null){
        redisStore[key] = value;
        if(ttl){
            setTimeout(()=>{
                delete redisStore[key];
                console.log(redisStore)
            }, ttl)
        }
    }
    this.get = function(key){
        console.log(redisStore[key])
    }

}
let redisStore1 = new RedisStore();
redisStore1.put('key1', 'value1');
redisStore1.put('key2', 'value2', 1000);
redisStore1.get('key2');
redisStore1.get('key1');
redisStore1.put('deletedSecond', 'value2', 5000);
redisStore1.put('deletedThird', 'value2', 3000);




//encapsulation -> 