const {readFile, writeFile} = require('fs');

console.log("Start")
readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    // console.log(first);
    readFile('./content/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        // console.log(second)
        writeFile('./content/result-async.txt',
        `here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log("Done with this task")
        })
    })
})
console.log("Starting next step")