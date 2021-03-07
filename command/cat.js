let fs=require("fs");
function displaycontent(filename){
    
    
    fs.readFile(filename, 'utf8', function(err, data){ 
        
        if(err){
            console.log("File Not Found");
        }
        process.stdout.write(data); 
    }); 

}
module.exports={
    fn:read
}

 
  function read(input){
  for(let i=0;i<input.length;i++){
      displaycontent(input[i]);

  }
}