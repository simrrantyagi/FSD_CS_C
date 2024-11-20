// let greet=() =>{
//     console.log("Say Hello");
// };
// function processuserinput(callback){
//     let name ="john";
//     callback(name);
// }
// processuserinput(greet);
console.log("Start");
setTimeout(()=>{
    console.log("first task completed")
    setTimeout(()=>{
        console.log("second task completed")
        setTimeout(()=>{
            console.log("Third task completed");
        },3000);
    },2000);
},1000);   