// console.log("Start");
// setTimeout(()=>{
//     console.log("first task completed")
//     setTimeout(()=>{
//         console.log("second task completed")
//         setTimeout(()=>{
//             console.log("Third task completed");
//         },3000);
//     },2000);
// },1000);   
const mypromise = new Promise((resolve,reject)=>{
    let success = true;
    if (success){
    resolve("Data Send Successfully");
}
else{
    reject("Data Not Send");

}
});
mypromise
    .then((message)=>console.log(message))
    .catch((err)=>console.log(err));