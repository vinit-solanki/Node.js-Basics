// "npm install give-me-a-joke" -> to install a joke module
const jokes = require('give-me-a-joke');
var colors = require('colors');
jokes.getRandomDadJoke(function (joke){
    console.log("Dad Joke:", joke.green);    
})
// cowsay can be used to give terminal output as a cow 
const figlet = require('figlet');
figlet("Vinit!",function (err,data){
    if(err){
        console.log(err,"\nSomething went wrong!");
        return;        
    }
    else{
        console.log(data.rainbow);
    }
})