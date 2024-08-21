const eventEmitter=require('events');
const http=require('http');
// class SAMIULLAH extends eventEmitter(){
//     constructor(){
//         super();
//     }
// } 

// const myEmitter=new SAMIULLAH();

const myEmitter=new eventEmitter();
//observers
myEmitter.on('sami',()=>{
    console.log('I am samiullah!');
})
myEmitter.on('sami',()=>{
    console.log('I am samiullah ramzan!');
})
myEmitter.on('sami',item=>{
    console.log(`I am samiullah with ${item}!`);
})

myEmitter.emit('sami',15); // we can create many event listener for one name events..


// server
const server=http.createServer();

server.on('request',(req,res)=>{
    res.end('request received !');
})
server.on('request',(req,res)=>{
    console.log('other request received !');
})

server.on('close',(req,res)=>{
    console.log('close request !');
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('request waiting!');
})