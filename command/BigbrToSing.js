const fs = require('fs'); 
const readline = require('readline'); 

function LineNumberubg(src)
{
    const file = readline.createInterface({ 
        input: fs.createReadStream(src), 
    });     

    file.on('line', (line) => { 
        if(line=="" && count==0)
        {
        console.log(line);
        count=1;
        }
        else if(line!="")
        {
            console.log(line);
            count=0;
        }

    }); 
}
function breaker(fileName)
{
    LineNumberubg(fileName);
}

module.exports={
    breaker:breaker
}


