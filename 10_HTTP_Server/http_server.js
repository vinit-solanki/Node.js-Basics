const fs = require('fs')
const http = require("http");
const url = require('url');

const server = http.createServer((req, res) => {
  const log = Date.now();
  fs.appendFile('./logs.txt',`New Request Received: ${log} on ${req.url}\n`,(err)=>{
    if(err){
        console.log('Some Error Occured!');
    }
  });
  
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);

  if (myUrl.pathname === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to Home Page!");
  } else if (myUrl.pathname === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.statusMessage = "You have entered the about page...";
    // http://localhost:3000/about?username=vinit&&Id=1&&search=youtube
    let username = myUrl.query.username;
    console.log(username);
    const search = myUrl.query.search;
    res.end(`Hi ${username} ${myUrl.query.Id}, Welcome to about page!,\nYou Searched: ${search}`);
  } else if(myUrl.pathname==='/about/search' && req.method==='GET'){
    res.statusCode=200;
    const search = myUrl.query.topic;
    res.end(`You searched for ${search}`);
  }
  else {
    res.statusCode=404;
    res.end('Page Not Found!');
  }
});

server.listen(3000,()=>{
    console.log(`The server is running on port number: ${server.address().port}`);
})
