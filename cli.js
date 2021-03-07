#! /usr/bin/env node
let input=process.argv.splice(2);
let read=require("./command/cat.js");
let breaker=require("./command/BigbrToSing.js") 
let givenumber=require("./command/Givenumber.js")
let givenumtononempty=require("./command/Nonemptynum")
let override=require("./command/override");
let append=require("./command/append");
let largespace=require("./command/largespaces")

switch(input[0]){
    case  "-s":
        if(input.length==2){
        breaker.breaker(input[1]);
        break;
        }
        else{
            largespace.fn(input[1],input[3]);
            break;
        }

    case "-n":
        givenumber.fn(input[1]);
        break;
        
    case "-b":
        givenumtononempty.fn(input[1]);
        break;
    default:
        if(input[1]==">"){
            override.fn(input[0],input[2]);
        }else if(input[1]==">>"){
            append.fn(input[0],input[2]);
        }else{
            read.fn(input);
        }    
}