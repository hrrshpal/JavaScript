/* -------------------------- exploring async -------------------------- */
function num1(){
    return 1
}

async function num2(){
    return 2;
}

// num2().then(result => console.log(result))

// console.log('num1', num1());
// console.log('num2', num2());


/* -------------------------- exploring await -------------------------- */
async function waiting(){
    const value = await num2();
    console.log("waiting", value)
}

// waiting();


/* --------------------- creating a custom Promise --------------------- */
async function waitForMyPromise(){
    const p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("DONE")
        },1000)
    })

    const result = await p;
    console.log("My promise is",result)
}

// waitForMyPromise();


/* -------------------------- exploring then --------------------------- */
// new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("DONE")
//     },1500)
// }).then(r => console.log("then my other promise is",r))



/* ------------------- turn setTimeout into a Promise ------------------ */
function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function hi(){
    const p = await wait(2000)
    console.log("process completed")
}

// hi()


/* -------------------- exploring reject and .catch -------------------- */
const tryRandomPromise = (random) => new Promise((resolve, reject) =>{
    if(random > 0.5)
        resolve("success")
    else
        reject("error")
})

// for(let i=0; i<10; i++){
//     const random = Math.random();
//     wait(2000 + random*1000)
//         .then(()=> tryRandomPromise(random))
//         .then(result => console.log("random try #",i,result))
//         .catch(error => console.error("random try #",i,error))
// }


/* ---------------- exploring async/await and try/catch ---------------- */

const tryTryAgain = async (i) => {
    const random = Math.random();
    await wait(3000 + random*1000)

    try{
        const result = await tryRandomPromise(random);
        console.log("random again #", i , result)
    } catch (error){
        console.log("random again #", i , error)
    }
}

for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}

/* -------------------- Promises are asynchronous! --------------------- */
console.log("END OF PROG")
