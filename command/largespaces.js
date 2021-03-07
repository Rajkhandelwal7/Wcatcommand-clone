let fs=require("fs");
function LargeSpace(filename1,filename2){
    let string=fs.readFileSync(filename1,'utf-8');
    string=string.replace(/ {2,}/g,' ');
     fs.writeFileSync(filename2,string);
}
// let input=process.argv;
// LargeSpace(input[2],input[3]);
module.exports={
    fn:LargeSpace
}
