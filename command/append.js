let fs=require("fs");
function append(filename1,filename2){
    let string=fs.readFileSync(filename1,'utf-8');
    fs.appendFileSync(filename2,string);
}
// let input=process.argv;
// override(input[2],input[3]);
module.exports={
    fn:append
}