const fs = require('fs'); 
const readline = require('readline'); 
function Givenumtononempty(filename){
const file = readline.createInterface({ 
    input: fs.createReadStream(filename), 
    // output: process.stdout, 
    // terminal: false
}); 
let k=1;
file.on('line', (line) => { 
    if(line !=""){
        console.log(k++,line);
        //count=0;
    }
    // else if(line =="" && count==0){
    //     console.log(k++,line);
    //     count=1;
    // }

}); 
}
module.exports={
    fn:Givenumtononempty
}